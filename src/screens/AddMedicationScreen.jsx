import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";

import {
  createMedication,
  updateMedication,
} from "../services/medicationService";
import styles from "../styles/addMedicationStyles";

export default function AddMedicationScreen({ navigation, route }) {
  const medication = route?.params?.medication;
  const isEditing = !!medication;
  const [name, setName] = useState("");

  const [dosage, setDosage] = useState("");

  const [instructions, setInstructions] = useState("");

  const [frequency, setFrequency] = useState("DAILY");

  const [startDate, setStartDate] = useState(new Date());

  const [showDatePicker, setShowDatePicker] = useState(false);

  const [times, setTimes] = useState(["08:00"]);

  useEffect(() => {
    if (!medication) return;

    setName(medication.name || "");
    setDosage(medication.dosage || "");
    setInstructions(medication.instructions || "");
    setFrequency(medication.frequency || "DAILY");
    setStartDate(
      medication.startDate ? new Date(medication.startDate) : new Date(),
    );
    setTimes(medication.times?.length ? medication.times : ["08:00"]);
  }, [medication]);

  const saveMedication = async () => {
    if (!name.trim() || !dosage.trim()) {
      Alert.alert("Missing details", "Name and dosage are required.");
      return;
    }

    try {
      const payload = {
        name: name.trim(),
        dosage: dosage.trim(),
        instructions,
        frequency,
        startDate,
        times,
      };

      if (isEditing) {
        await updateMedication(medication._id, payload);
      } else {
        await createMedication(payload);
      }

      Alert.alert("Success", isEditing ? "Medication updated" : "Medication saved", [
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch (error) {
      Alert.alert("Could not save medication", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <TouchableOpacity
            accessibilityLabel="Go back"
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back" size={24} color="#2563EB" />
          </TouchableOpacity>

          <Text style={styles.header}>
            {isEditing ? "Edit Medication" : "Add Medication"}
          </Text>

          <View style={styles.headerSpacer} />
        </View>

        <Text style={styles.label}>Medication Name</Text>

        <TextInput
          style={styles.input}
          placeholder="Metformin"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Dosage</Text>

        <TextInput
          style={styles.input}
          placeholder="500mg"
          value={dosage}
          onChangeText={setDosage}
        />

        <Text style={styles.label}>Instructions</Text>

        <TextInput
          style={[styles.input, styles.instructions]}
          multiline
          value={instructions}
          onChangeText={setInstructions}
          placeholder="Take after breakfast"
        />

        <Text style={styles.label}>Frequency</Text>

        <View style={styles.frequencyRow}>
          {["DAILY", "WEEKLY", "CUSTOM"].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.frequencyButton,

                frequency === item && styles.frequencyActive,
              ]}
              onPress={() => setFrequency(item)}
            >
              <Text
                style={[
                  styles.frequencyText,

                  frequency === item && styles.frequencyTextActive,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Start Date</Text>

        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowDatePicker(true)}
        >
          <Text>{startDate.toDateString()}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            onChange={(_, selectedDate) => {
              setShowDatePicker(false);

              if (selectedDate) {
                setStartDate(selectedDate);
              }
            }}
          />
        )}

        <TouchableOpacity style={styles.saveButton} onPress={saveMedication}>
          <Text style={styles.saveButtonText}>
            {isEditing ? "Update Medication" : "Save Medication"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
