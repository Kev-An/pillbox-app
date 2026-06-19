import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/onboardingStyles";

export default function FeatureCard({ icon, title, description }) {
  return (
    <View style={styles.featureCard}>
      <Text style={styles.featureIcon}>{icon}</Text>

      <Text style={styles.featureTitle}>{title}</Text>

      <Text style={styles.featureText}>{description}</Text>
    </View>
  );
}
