import React, { useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useAuth } from "../context/AuthContext";
import styles from "../styles/profileStyles";

export default function ProfileScreen() {
  const { logout, saveProfile, user } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [timezone, setTimezone] = useState("Asia/Kolkata");
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setName(user?.name || "");
    setEmail(user?.email || "");
    setPhotoUrl(user?.photoUrl || "");
    setTimezone(user?.timezone || "Asia/Kolkata");
    setNotificationEnabled(user?.notificationEnabled !== false);
  }, [user]);

  const initials = (name || "PillBox User")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleSave = async () => {
    if (!name.trim() || !email.trim()) {
      Alert.alert("Missing details", "Name and email are required.");
      return;
    }

    setIsSaving(true);

    try {
      await saveProfile({
        email: email.trim(),
        name: name.trim(),
        notificationEnabled,
        photoUrl: photoUrl.trim(),
        timezone: timezone.trim() || "Asia/Kolkata",
      });
      Alert.alert("Profile saved", "Your profile was updated.");
    } catch (error) {
      Alert.alert("Could not save profile", error.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Profile</Text>

          <View style={styles.profileCard}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{initials}</Text>
            </View>

            <Text style={styles.name}>{name || "PillBox User"}</Text>
            <Text style={styles.email}>{email || "No email set"}</Text>
          </View>

          <View style={styles.formCard}>
            <Field
              icon="person-outline"
              label="Name"
              value={name}
              onChangeText={setName}
            />
            <Field
              autoCapitalize="none"
              icon="mail-outline"
              keyboardType="email-address"
              label="Email"
              value={email}
              onChangeText={setEmail}
            />
            <Field
              autoCapitalize="none"
              icon="image-outline"
              label="Photo URL"
              value={photoUrl}
              onChangeText={setPhotoUrl}
            />
            <Field
              autoCapitalize="none"
              icon="time-outline"
              label="Timezone"
              value={timezone}
              onChangeText={setTimezone}
            />

            <View style={styles.notificationRow}>
              <View style={styles.rowIcon}>
                <Ionicons name="notifications-outline" size={20} color="#2563EB" />
              </View>
              <View style={styles.rowContent}>
                <Text style={styles.rowLabel}>Reminder notifications</Text>
                <Text style={styles.rowValue}>
                  {notificationEnabled ? "Enabled" : "Disabled"}
                </Text>
              </View>
              <Switch
                onValueChange={setNotificationEnabled}
                value={notificationEnabled}
              />
            </View>
          </View>

          <TouchableOpacity
            disabled={isSaving}
            onPress={handleSave}
            style={styles.saveButton}
          >
            <Ionicons name="save-outline" size={20} color="#FFFFFF" />
            <Text style={styles.saveButtonText}>
              {isSaving ? "Saving..." : "Save Profile"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={logout} style={styles.logoutButton}>
            <Ionicons name="log-out-outline" size={20} color="#EF4444" />
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Field({ icon, label, ...inputProps }) {
  return (
    <View style={styles.fieldRow}>
      <View style={styles.rowIcon}>
        <Ionicons name={icon} size={20} color="#2563EB" />
      </View>
      <View style={styles.rowContent}>
        <Text style={styles.rowLabel}>{label}</Text>
        <TextInput
          placeholderTextColor="#8FA1B8"
          style={styles.input}
          {...inputProps}
        />
      </View>
    </View>
  );
}
