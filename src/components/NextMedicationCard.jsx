import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import styles from "../styles/homeScreenStyles";

export default function NextMedicationCard({ medication, onMarkTaken, time }) {
  if (!medication) {
    return (
      <LinearGradient
        colors={["#2563EB", "#3B82F6", "#60A5FA"]}
        style={[styles.heroCard, styles.heroCardEmpty]}
      >
        <Text style={styles.heroLabel}>NO UPCOMING MEDICATIONS</Text>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={["#2563EB", "#3B82F6", "#60A5FA"]}
      style={styles.heroCard}
    >
      <View style={styles.heroIconWrap}>
        <Ionicons
          name={medication.icon || "medical"}
          size={40}
          color="#FFFFFF"
        />
      </View>

      <Text style={styles.heroLabel}>NEXT DOSE</Text>

      <Text style={styles.heroTitle}>{medication.name}</Text>

      <Text style={styles.heroDose}>{medication.dosage}</Text>

      <Text style={styles.heroTime}>
        {time || medication.times?.[0] || "No Time Set"}
      </Text>

      <TouchableOpacity style={styles.heroButton} onPress={onMarkTaken}>
        <Text style={styles.heroButtonText}>Mark as Taken</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
