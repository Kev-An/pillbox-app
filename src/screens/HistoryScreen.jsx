import React, { useCallback, useMemo, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useFocusEffect } from "@react-navigation/native";

import { getAllMedications } from "../services/medicationService";
import { isCompletedMedication } from "../utils/medicationStatus";
import { getEndOfDay, getStartOfDay } from "../utils/doseStats";

import styles from "../styles/historyStyles";

const FILTERS = ["ALL", "DAILY", "WEEKLY", "CUSTOM"];

export default function HistoryScreen({ navigation }) {
  const [completedMedications, setCompletedMedications] = useState([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [customStartDate, setCustomStartDate] = useState(getStartOfDay());
  const [customEndDate, setCustomEndDate] = useState(getEndOfDay());
  const [visiblePicker, setVisiblePicker] = useState(null);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const loadMedications = async () => {
        try {
          const response = await getAllMedications();
          const medications = (response.data || []).filter(
            isCompletedMedication,
          );

          if (isActive) {
            setCompletedMedications(medications);
          }
        } catch (error) {
          console.log(error);
        }
      };

      loadMedications();

      return () => {
        isActive = false;
      };
    }, []),
  );

  const filteredMedications = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return completedMedications.filter((medication) => {
      const completedAt = new Date(
        medication.endDate || medication.updatedAt || medication.createdAt,
      );
      const matchesFilter =
        filter === "ALL" ||
        (filter === "CUSTOM"
          ? completedAt >= getStartOfDay(customStartDate) &&
            completedAt <= getEndOfDay(customEndDate)
          : medication.frequency === filter);

      const searchableText = [
        medication.name,
        medication.dosage,
        medication.instructions,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchesFilter && searchableText.includes(normalizedQuery);
    });
  }, [completedMedications, customEndDate, customStartDate, filter, query]);

  const handleFilterPress = (item) => {
    setFilter(item);

    if (item === "CUSTOM") {
      setVisiblePicker("start");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.topBar}>
            <TouchableOpacity
              accessibilityLabel="Go back"
              onPress={() => navigation.goBack()}
              style={styles.iconButton}
            >
              <Ionicons name="chevron-back" size={24} color="#2563EB" />
            </TouchableOpacity>

            <View style={styles.titleWrap}>
              <Text style={styles.title}>History</Text>
              <Text style={styles.subtitle}>
                {completedMedications.length} completed
              </Text>
            </View>

            <View style={styles.iconButton}>
              <Ionicons name="checkmark-done" size={22} color="#2563EB" />
            </View>
          </View>

          <View style={styles.searchBox}>
            <Ionicons name="search" size={18} color="#5B7190" />
            <TextInput
              placeholder="Search completed meds"
              placeholderTextColor="#8FA1B8"
              style={styles.searchInput}
              value={query}
              onChangeText={setQuery}
            />
          </View>

          <View style={styles.filterRow}>
            {FILTERS.map((item) => {
              const isActive = filter === item;

              return (
                <TouchableOpacity
                  key={item}
                  onPress={() => handleFilterPress(item)}
                  style={[
                    styles.filterChip,
                    isActive && styles.filterChipActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.filterText,
                      isActive && styles.filterTextActive,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {filter === "CUSTOM" && (
            <View style={styles.dateRangeCard}>
              <TouchableOpacity
                onPress={() => setVisiblePicker("start")}
                style={styles.dateButton}
              >
                <Ionicons name="calendar-outline" size={18} color="#2563EB" />
                <View>
                  <Text style={styles.dateButtonLabel}>From</Text>
                  <Text style={styles.dateButtonValue}>
                    {customStartDate.toDateString()}
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setVisiblePicker("end")}
                style={styles.dateButton}
              >
                <Ionicons name="calendar" size={18} color="#2563EB" />
                <View>
                  <Text style={styles.dateButtonLabel}>To</Text>
                  <Text style={styles.dateButtonValue}>
                    {customEndDate.toDateString()}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}

          {visiblePicker && (
            <DateTimePicker
              value={
                visiblePicker === "start" ? customStartDate : customEndDate
              }
              mode="date"
              onChange={(_, selectedDate) => {
                setVisiblePicker(null);

                if (!selectedDate) return;

                if (visiblePicker === "start") {
                  setCustomStartDate(getStartOfDay(selectedDate));
                  return;
                }

                setCustomEndDate(getEndOfDay(selectedDate));
              }}
            />
          )}

          {filteredMedications.length ? (
            filteredMedications.map((medication) => (
              <HistoryCard key={medication._id} medication={medication} />
            ))
          ) : (
            <View style={styles.emptyCard}>
              <Ionicons name="time-outline" size={34} color="#2563EB" />
              <Text style={styles.emptyTitle}>No completed courses yet</Text>
              <Text style={styles.emptyText}>
                Completed medication courses will appear here when they are
                marked inactive or pass their end date.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

function HistoryCard({ medication }) {
  const completedDate = medication.endDate
    ? new Date(medication.endDate).toDateString()
    : "Marked complete";

  return (
    <View style={styles.medicationCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.medicationName}>{medication.name}</Text>

        <View style={styles.statusPill}>
          <Text style={styles.statusText}>COMPLETED</Text>
        </View>
      </View>

      <Text style={styles.dosage}>{medication.dosage}</Text>

      {!!medication.instructions && (
        <Text style={styles.instructions}>{medication.instructions}</Text>
      )}

      <View style={styles.metaRow}>
        <Ionicons name="calendar-outline" size={15} color="#2563EB" />
        <Text style={styles.metaText}>{completedDate}</Text>
      </View>
    </View>
  );
}
