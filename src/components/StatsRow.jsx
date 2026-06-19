import React from "react";
import { View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import StatCard from "./StatCard";
import styles from "../styles/homeScreenStyles";

export default function StatsRow({ dueNowCount = 0, streak = 0, takenPercent = 0 }) {
  return (
    <View style={styles.statsRow}>
      <StatCard
        icon={<Ionicons name="checkmark-circle" size={24} color="#22C55E" />}
        value={`${takenPercent}%`}
        label="Taken Today"
      />

      <StatCard
        icon={<Ionicons name="time" size={24} color="#2563EB" />}
        value={dueNowCount}
        label="Due Now"
      />

      <StatCard
        icon={<Ionicons name="flame" size={24} color="#F97316" />}
        value={streak}
        label="Day Streak"
      />
    </View>
  );
}
