import React, { useState, useRef } from "react";
import { Text, View, Animated, Dimensions, SafeAreaView } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import FeatureCard from "../components/FeatureCard";
import PaginationDots from "../components/PaginationDots";
import GlassButton from "../components/GlassButton";
import Logo from "../components/Logo";

import { onboardingPages } from "../data/onboardingData";

import styles from "../styles/onboardingStyles";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function OnboardingScreen({ navigation }) {
  const [page, setPage] = useState(0);

  const slideAnim = useRef(new Animated.Value(0)).current;

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const currentPage =
    onboardingPages[Math.min(page, onboardingPages.length - 1)];

  const isLastPage = page === onboardingPages.length - 1;

  const handleNext = () => {
    if (isLastPage) {
      navigation.replace("Login");
      return;
    }

    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: -SCREEN_WIDTH,
        duration: 250,
        useNativeDriver: true,
      }),

      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setPage((prevPage) => prevPage + 1);

      slideAnim.setValue(SCREEN_WIDTH);
      fadeAnim.setValue(0);

      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),

        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  return (
    <LinearGradient
      colors={["#F5FBFF", "#E9F7FF", "#C7E8FF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.screen}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.brandBlock}>
            <Logo />

            <Text style={styles.appName}>PillBox</Text>
          </View>

          <Animated.View
            style={[
              styles.slideWrap,
              {
                opacity: fadeAnim,
                transform: [{ translateX: slideAnim }],
              },
            ]}
          >
            <FeatureCard
              icon={currentPage.icon}
              title={currentPage.title}
              description={currentPage.description}
            />
          </Animated.View>

          <View style={styles.footer}>
            <PaginationDots
              totalPages={onboardingPages.length}
              currentPage={page}
            />

            <GlassButton
              title={isLastPage ? "Get Started" : "Next"}
              onPress={handleNext}
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
