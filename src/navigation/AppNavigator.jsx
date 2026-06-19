import React from "react";
import { View } from "react-native";

import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnboardingScreen from "../screens/OnboaringScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import AddMedicationScreen from "../screens/AddMedicationScreen";
import MedsScreen from "../screens/MedsScreen";
import HistoryScreen from "../screens/HistoryScreen";
import MedInfoScreen from "../screens/MedInfoScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();
const HIDDEN_NAV_ROUTES = new Set(["Onboarding", "AddMedication", "MedInfo"]);

export default function AppNavigator() {
  const { isAuthenticated, isReady } = useAuth();
  const [currentRouteName, setCurrentRouteName] = React.useState("Onboarding");

  const syncCurrentRoute = () => {
    setCurrentRouteName(navigationRef.getCurrentRoute()?.name || "Onboarding");
  };

  const handleNavigate = (routeName) => {
    if (navigationRef.isReady() && routeName !== currentRouteName) {
      navigationRef.navigate(routeName);
    }
  };

  const showNavbar = !HIDDEN_NAV_ROUTES.has(currentRouteName);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={syncCurrentRoute}
      onStateChange={syncCurrentRoute}
    >
      <View style={{ flex: 1 }}>
        <Stack.Navigator
          screenOptions={{
            animation: "fade",
            animationDuration: 140,
            headerShown: false,
          }}
        >
          {!isAuthenticated ? (
            <>
              <Stack.Screen name="Onboarding" component={OnboardingScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Meds" component={MedsScreen} />
              <Stack.Screen name="MedInfo" component={MedInfoScreen} />
              <Stack.Screen name="History" component={HistoryScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen
                name="AddMedication"
                component={AddMedicationScreen}
              />
            </>
          )}
        </Stack.Navigator>

        {isAuthenticated && showNavbar && (
          <Navbar
            currentRouteName={currentRouteName}
            onNavigate={handleNavigate}
          />
        )}
      </View>
    </NavigationContainer>
  );
}
