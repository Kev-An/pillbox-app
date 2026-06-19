import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export default StyleSheet.create({
  screen: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    overflow: "hidden",
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 28,
  },

  brandBlock: {
    alignItems: "center",
    flexShrink: 0,
  },

  logoWrap: {
    alignItems: "center",
    alignSelf: "center",
    height: 154,
    justifyContent: "center",
    marginBottom: 4,
    width: 154,
  },

  logoBack: {
    borderRadius: 24,
    height: 76,
    opacity: 0.55,
    position: "absolute",
    transform: [{ rotate: "-10deg" }],
    width: 76,
  },

  logoImage: {
    width: 178,
    height: 150,
    shadowColor: "#1777FF",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.14,
    shadowRadius: 24,
    elevation: 8,
  },

  appName: {
    color: colors.primary,
    fontSize: 48,
    fontWeight: "800",
    textAlign: "center",
    marginTop: -4,
  },

  title: {
    color: colors.ink,
    fontSize: 33,
    fontWeight: "800",
    lineHeight: 39,
    marginBottom: 14,
    textAlign: "center",
  },

  description: {
    alignSelf: "center",
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 320,
    textAlign: "center",
  },

  featureItem: {
    backgroundColor: "rgba(255, 255, 255, 0.42)",
    borderColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 22,
    borderWidth: 1,
    overflow: "hidden",
    shadowColor: "#2B7CDB",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.08,
    shadowRadius: 22,
  },

  slideWrap: {
    flex: 1,
    justifyContent: "center",
    marginTop: 10,
  },

  featureCard: {
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.46)",
    borderColor: "rgba(255,255,255,0.72)",
    borderRadius: 28,
    borderWidth: 1,
    minHeight: 218,
    justifyContent: "center",
    paddingHorizontal: 26,
    paddingVertical: 34,
    shadowColor: "#2377ED",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 0.12,
    shadowRadius: 28,
    elevation: 6,
  },

  featureIcon: {
    backgroundColor: "rgba(255,255,255,0.86)",
    borderRadius: 24,
    color: colors.primary,
    fontSize: 18,
    fontWeight: "800",
    height: 48,
    lineHeight: 48,
    overflow: "hidden",
    textAlign: "center",
    width: 48,
  },

  featureTitle: {
    color: colors.ink,
    fontSize: 24,
    fontWeight: "800",
    marginTop: 18,
    marginBottom: 8,
    textAlign: "center",
  },

  featureText: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    maxWidth: 300,
  },

  featureTextWrap: {
    flex: 1,
  },

  glassHighlight: {
    backgroundColor: "rgba(255,255,255,0.62)",
    height: 1,
    left: 16,
    position: "absolute",
    right: 16,
    top: 1,
    zIndex: 1,
  },

  featureGlass: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginTop: 20,
    marginBottom: 16,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(23,119,255,0.25)",
  },

  activeDot: {
    width: 8,
    backgroundColor: colors.primary,
  },

  footer: {
    flexShrink: 0,
    paddingTop: 18,
  },

  buttonShadow: {
    borderRadius: 30,
    elevation: 8,
    marginTop: 16,
    shadowColor: "#2377ed",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.24,
    shadowRadius: 20,
  },

  glassButton: {
    borderRadius: 35,
    overflow: "hidden",
    borderWidth: 0,
    borderColor: "rgba(255,255,255,0.45)",
    backgroundColor: "rgba(255,255,255,0.15)",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 60,
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 30,
  },

  glassButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "800",
  },
});
