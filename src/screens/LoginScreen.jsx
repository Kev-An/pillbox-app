import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useAuth } from "../context/AuthContext";
import styles from "../styles/loginStyles";

export default function LoginScreen() {
  const { continueAsDemo, login, register } = useAuth();
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isSignup = mode === "signup";

  const submit = async () => {
    if (!email.trim() || !password.trim() || (isSignup && !name.trim())) {
      Alert.alert("Missing details", "Please fill in the required fields.");
      return;
    }

    setIsLoading(true);

    try {
      if (isSignup) {
        await register({
          email: email.trim(),
          name: name.trim(),
          password,
        });
      } else {
        await login({
          email: email.trim(),
          password,
        });
      }
    } catch (error) {
      Alert.alert("Authentication failed", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemo = async () => {
    setIsLoading(true);

    try {
      await continueAsDemo();
    } catch (error) {
      Alert.alert("Could not load demo profile", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <View style={styles.brand}>
        <View style={styles.logoMark}>
          <Ionicons name="medical" size={30} color="#FFFFFF" />
        </View>
        <Text style={styles.logo}>PillBox</Text>
      </View>

      <Text style={styles.heading}>
        {isSignup ? "Create your account" : "Welcome back"}
      </Text>

      <Text style={styles.subHeading}>
        {isSignup
          ? "Start tracking medications, reminders, and adherence."
          : "Sign in to continue managing your medications."}
      </Text>

      {isSignup && (
        <TextInput
          autoCapitalize="words"
          placeholder="Name"
          placeholderTextColor="#8FA1B8"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      )}

      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Email"
        placeholderTextColor="#8FA1B8"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#8FA1B8"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        disabled={isLoading}
        style={styles.loginButton}
        onPress={submit}
      >
        {isLoading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.loginButtonText}>
            {isSignup ? "Create Account" : "Log In"}
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        disabled={isLoading}
        style={styles.demoButton}
        onPress={handleDemo}
      >
        <Ionicons name="flash-outline" size={18} color="#2563EB" />
        <Text style={styles.demoText}>Continue with demo profile</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
        </Text>

        <TouchableOpacity
          onPress={() => setMode(isSignup ? "login" : "signup")}
        >
          <Text style={styles.signupText}>
            {isSignup ? "Log in" : "Sign up"}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
