import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/homeScreenStyles";

export default function Navbar({ currentRouteName, onNavigate }) {
  const navItems = [
    {
      icon: "home",
      label: "Home",
      routeName: "Home",
    },
    {
      icon: "medical",
      label: "Meds",
      routeName: "Meds",
    },
    {
      icon: "time",
      label: "History",
      routeName: "History",
    },
    {
      icon: "person",
      label: "Profile",
      routeName: "Profile",
    },
  ];

  return (
    <View style={styles.navbar}>
      {navItems.map((item) => {
        const isActive = item.routeName === currentRouteName;
        const color = isActive ? "#2563EB" : "#9CA3AF";

        return (
          <TouchableOpacity
            key={item.label}
            onPress={() => {
              onNavigate(item.routeName);
            }}
            style={styles.navItem}
          >
            <Ionicons name={item.icon} size={28} color={color} />
            <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
