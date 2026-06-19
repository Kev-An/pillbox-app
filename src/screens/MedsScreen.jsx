import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

import {
  deleteMedication,
  getAllMedications,
  markMedicationStatus,
  markMedicationTaken,
} from "../services/medicationService";
import { isTrackedMedication } from "../utils/medicationStatus";
import { buildScheduledDose } from "../utils/doseStats";

import styles from "../styles/medStyles";

export default function MedsScreen({ navigation }) {
  const [medications, setMedications] = useState([]);

  const loadMedications = useCallback(async () => {
    const response = await getAllMedications();
    const trackedMedications = (response.data || []).filter(
      isTrackedMedication,
    );

    setMedications(trackedMedications);
  }, []);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const load = async () => {
        try {
          const response = await getAllMedications();
          const trackedMedications = (response.data || []).filter(
            isTrackedMedication,
          );

          if (isActive) {
            setMedications(trackedMedications);
          }
        } catch (error) {
          console.log(error);
        }
      };

      load();

      return () => {
        isActive = false;
      };
    }, []),
  );

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
              <Text style={styles.title}>Meds</Text>
              <Text style={styles.subtitle}>{medications.length} active</Text>
            </View>

            <TouchableOpacity
              accessibilityLabel="Add medication"
              onPress={() => navigation.navigate("AddMedication")}
              style={[styles.iconButton, styles.addButton]}
            >
              <Ionicons name="add" size={26} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {medications.length ? (
            medications.map((medication) => (
              <MedicationCard
                key={medication._id}
                medication={medication}
                navigation={navigation}
                onChanged={loadMedications}
              />
            ))
          ) : (
            <View style={styles.emptyCard}>
              <Ionicons name="medical-outline" size={34} color="#2563EB" />
              <Text style={styles.emptyTitle}>No tracked medications</Text>
              <Text style={styles.emptyText}>
                Add medications to see the courses you are currently following.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

function MedicationCard({ medication, navigation, onChanged }) {
  const times = medication.times?.length ? medication.times : ["No time set"];
  const nextDose = buildScheduledDose(
    medication,
    medication.times?.[0] || "00:00",
  );

  const handleMarkTaken = async () => {
    try {
      await markMedicationTaken(medication._id, nextDose.scheduledTime);
      Alert.alert("Marked Taken", `${medication.name} was marked as taken.`);
      onChanged();
    } catch (error) {
      Alert.alert("Could not mark taken", error.message);
    }
  };

  const handleDelete = () => {
    Alert.alert(
      "Delete medication",
      `Remove ${medication.name} from your medications?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteMedication(medication._id);
              onChanged();
            } catch (error) {
              Alert.alert("Could not delete", error.message);
            }
          },
        },
      ],
    );
  };

  return (
    <View style={styles.medicationCard}>
      <TouchableOpacity
        onPress={() => navigation.navigate("MedInfo", { medication })}
        style={styles.medicationPressArea}
      >
        <View style={styles.iconWrap}>
          <Ionicons
            name={medication.icon || "medical"}
            size={22}
            color="#2563EB"
          />
        </View>

        <View style={styles.medicationContent}>
          <View style={styles.medicationHeader}>
            <Text style={styles.medicationName}>{medication.name}</Text>

            <View style={styles.pill}>
              <Text style={styles.pillText}>{medication.frequency}</Text>
            </View>
          </View>

          <Text style={styles.dosage}>{medication.dosage}</Text>

          {!!medication.instructions && (
            <Text style={styles.instructions}>{medication.instructions}</Text>
          )}

          <View style={styles.timeRow}>
            {times.map((time) => (
              <View key={time} style={styles.timeChip}>
                <Text style={styles.timeText}>{time}</Text>
              </View>
            ))}
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.actionRow}>
        <TouchableOpacity
          accessibilityLabel={`Mark ${medication.name} as taken`}
          onPress={handleMarkTaken}
          style={[styles.actionButton, styles.takenButton]}
        >
          <Ionicons name="checkmark-circle" size={18} color="#FFFFFF" />
          <Text style={styles.actionButtonText}>Taken</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityLabel={`Edit ${medication.name}`}
          onPress={() => navigation.navigate("AddMedication", { medication })}
          style={[styles.actionButton, styles.editButton]}
        >
          <Ionicons name="create-outline" size={17} color="#FFFFFF" />
          <Text style={styles.actionButtonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityLabel={`Delete ${medication.name}`}
          onPress={handleDelete}
          style={[styles.actionButton, styles.deleteButton]}
        >
          <Ionicons name="trash" size={17} color="#FFFFFF" />
          <Text style={styles.actionButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statusRow}>
        <TouchableOpacity
          onPress={async () => {
            try {
              await markMedicationStatus(
                medication._id,
                nextDose.scheduledTime,
                "SKIPPED",
              );
              Alert.alert("Dose skipped", `${medication.name} was skipped.`);
            } catch (error) {
              Alert.alert("Could not skip dose", error.message);
            }
          }}
          style={styles.statusButton}
        >
          <Text style={styles.statusButtonText}>Skip Dose</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={async () => {
            try {
              await markMedicationStatus(
                medication._id,
                nextDose.scheduledTime,
                "MISSED",
              );
              Alert.alert("Dose marked missed", `${medication.name} was missed.`);
            } catch (error) {
              Alert.alert("Could not mark missed", error.message);
            }
          }}
          style={styles.statusButton}
        >
          <Text style={styles.statusButtonText}>Mark Missed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
