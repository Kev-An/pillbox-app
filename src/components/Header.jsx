import React from "react";
import { View, Text } from "react-native";

import styles from "../styles/homeScreenStyles";

export default function Header() {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <View>
      <Text style={styles.greeting}>Good Morning</Text>

      <Text style={styles.date}>{today}</Text>
    </View>
  );
}
