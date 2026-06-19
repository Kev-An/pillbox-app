import React from "react";
import { View } from "react-native";
import styles from "../styles/onboardingStyles";

export default function PaginationDots({ totalPages, currentPage }) {
  return (
    <View style={styles.dots}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <View
          key={index}
          style={[styles.dot, currentPage === index && styles.activeDot]}
        />
      ))}
    </View>
  );
}
