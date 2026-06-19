import React, { useCallback, useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

import {
  getAllMedications,
  getDoseLogs,
  markMedicationTaken,
} from "../services/medicationService";
import { isTrackedMedication } from "../utils/medicationStatus";
import {
  getDoseStreak,
  getTodayStats,
  hasTakenLogForDose,
} from "../utils/doseStats";

import Header from "../components/Header";
import NextMedicationCard from "../components/NextMedicationCard";
import StatsRow from "../components/StatsRow";
import UpcomingToday from "../components/UpcomingToday";

import styles from "../styles/homeScreenStyles";

export default function HomeScreen({ navigation }) {
  const [medications, setMedications] = useState([]);
  const [doseLogs, setDoseLogs] = useState([]);

  const loadHomeData = useCallback(async () => {
    const [medicationsResponse, doseLogsResponse] = await Promise.all([
      getAllMedications(),
      getDoseLogs(),
    ]);
    const trackedMedications = (medicationsResponse.data || []).filter(
      isTrackedMedication,
    );

    setMedications(trackedMedications);
    setDoseLogs(doseLogsResponse.data || []);
  }, []);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const loadMedications = async () => {
        try {
          const [medicationsResponse, doseLogsResponse] = await Promise.all([
            getAllMedications(),
            getDoseLogs(),
          ]);
          const trackedMedications = (medicationsResponse.data || []).filter(
            isTrackedMedication,
          );

          if (isActive) {
            setMedications(trackedMedications);
            setDoseLogs(doseLogsResponse.data || []);
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

  const todayStats = getTodayStats(medications, doseLogs);
  const availableDoses = todayStats.scheduledDoses.filter(
    (dose) => !hasTakenLogForDose(doseLogs, dose),
  );
  const nextDose =
    availableDoses.find(
      (dose) => dose.scheduledTime.getTime() >= new Date().getTime(),
    ) || availableDoses[0];

  const handleMarkTaken = async () => {
    if (!nextDose) return;

    try {
      await markMedicationTaken(nextDose.medicationId, nextDose.scheduledTime);
      await loadHomeData();
    } catch (error) {
      Alert.alert("Could not mark taken", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Header />

            <TouchableOpacity
              accessibilityLabel="Add medication"
              onPress={() => navigation.navigate("AddMedication")}
              style={styles.addButton}
            >
              <Ionicons name="add" size={26} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <NextMedicationCard
            medication={nextDose?.medication}
            time={nextDose?.time}
            onMarkTaken={handleMarkTaken}
          />

          <StatsRow
            dueNowCount={todayStats.dueNowDoses.length}
            streak={getDoseStreak(doseLogs)}
            takenPercent={todayStats.takenPercent}
          />

          <UpcomingToday
            doses={todayStats.scheduledDoses}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
