import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { markMedicationTaken } from "../services/medicationService";
import { buildScheduledDose } from "../utils/doseStats";
import styles from "../styles/medInfoStyles";

export default function MedInfoScreen({ route, navigation }) {
  const medication = route?.params?.medication;

  if (!medication) {
    return (
      <View>
        <Text>Medication not found</Text>
      </View>
    );
  }

  const handleMarkTaken = async () => {
    const dose = buildScheduledDose(
      medication,
      medication.times?.[0] || "00:00",
    );

    try {
      await markMedicationTaken(medication._id, dose.scheduledTime);
      Alert.alert("Medication Taken", `${medication.name} marked as taken`);
    } catch (error) {
      Alert.alert("Could not mark taken", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back" size={24} color="#2563EB" />
          </TouchableOpacity>

          <View style={styles.header}>
            <Ionicons
              name={medication.icon || "medical"}
              size={50}
              color="#2563EB"
            />

            <Text style={styles.name}>{medication.name}</Text>

            <Text style={styles.frequency}>{medication.frequency}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Dosage</Text>
            <Text style={styles.value}>{medication.dosage}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Instructions</Text>
            <Text style={styles.value}>
              {medication.instructions || "No instructions"}
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Times</Text>

            {medication.times?.map((time) => (
              <Text key={time} style={styles.value}>
                {`\u2022 ${time}`}
              </Text>
            ))}
          </View>

          <TouchableOpacity
            style={styles.takenButton}
            onPress={handleMarkTaken}
          >
            <Ionicons name="checkmark-circle" size={22} color="white" />

            <Text style={styles.takenButtonText}>Mark as Taken</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
