import React from "react";
import { Pressable, Text } from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

import styles from "../styles/onboardingStyles";

export default function GlassButton({ title, onPress }) {
  return (
    <Pressable style={styles.buttonShadow} onPress={onPress}>
      <BlurView intensity={80} tint="light" style={styles.glassButton}>
        <LinearGradient
          colors={["rgba(23,119,255,0.55)", "rgba(93,185,255,0.35)"]}
          style={styles.button}
        >
          <Text style={styles.glassButtonText}>{title}</Text>
        </LinearGradient>
      </BlurView>
    </Pressable>
  );
}
