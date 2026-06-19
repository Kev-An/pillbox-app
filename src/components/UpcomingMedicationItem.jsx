import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/homeScreenStyles";

export default function UpcomingMedicationItem({ time, name, dosage }) {
  return (
    <View style={styles.upcomingItem}>
      <View style={styles.upcomingTimeContainer}>
        <Ionicons name="time-outline" size={16} color="#2563EB" />

        <Text style={styles.upcomingTime}>{time || "No time"}</Text>
      </View>

      <View style={styles.upcomingContent}>
        <Text style={styles.upcomingName}>{name}</Text>

        <Text style={styles.upcomingDosage}>{dosage}</Text>
      </View>
    </View>
  );
}
