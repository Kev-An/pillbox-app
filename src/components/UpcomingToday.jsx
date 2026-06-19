import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import UpcomingMedicationItem from "./UpcomingMedicationItem";
import styles from "../styles/homeScreenStyles";

export default function UpcomingToday({ doses, navigation }) {
  if (!doses?.length) {
    return (
      <View style={styles.upcomingCard}>
        <Text>No medications found</Text>
      </View>
    );
  }
  return (
    <View style={styles.upcomingCard}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Upcoming Today</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Meds")}>
          <Ionicons name="chevron-forward" size={22} color="#2563EB" />
        </TouchableOpacity>
      </View>

      {doses.map((dose) => (
        <UpcomingMedicationItem
          key={dose.id}
          name={dose.name}
          dosage={dose.dosage}
          time={dose.time}
        />
      ))}
    </View>
  );
}
