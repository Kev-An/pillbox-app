import React from "react";
import { View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "../styles/onboardingStyles";
import { colors } from "../constants/colors";

export default function Logo() {
  return (
    <View style={styles.logoWrap}>
      <LinearGradient
        colors={[colors.primary, colors.babyBlue]}
        style={styles.logoBack}
      />

      <Image
        source={require("../assets/app_logo.png")}
        style={styles.logoImage}
        resizeMode="contain"
      />
    </View>
  );
}
