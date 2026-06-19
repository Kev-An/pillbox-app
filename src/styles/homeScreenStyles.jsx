import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FBFF",
  },

  scrollContent: {
    paddingBottom: 104,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 18,
  },

  headerRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  addButton: {
    alignItems: "center",
    backgroundColor: "#2563EB",
    borderRadius: 22,
    height: 44,
    justifyContent: "center",
    shadowColor: "#2563EB",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.22,
    shadowRadius: 14,
    width: 44,
    elevation: 5,
  },

  greeting: {
    color: "#102D4F",
    fontSize: 34,
    fontWeight: "800",
    letterSpacing: 0,
  },

  date: {
    marginTop: 6,
    color: "#5B7190",
    fontSize: 16,
  },

  heroCard: {
    backgroundColor: "#2F6BFF",
    borderRadius: 24,
    padding: 18,
    marginBottom: 16,
    shadowColor: "#2563EB",
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowOpacity: 0.18,
    shadowRadius: 24,
    elevation: 6,
  },

  heroCardEmpty: {
    minHeight: 92,
    justifyContent: "center",
  },

  heroIconWrap: {
    alignItems: "flex-end",
    marginBottom: 2,
  },

  heroLabel: {
    color: "#DCE7FF",
    fontSize: 13,
  },

  heroTitle: {
    fontSize: 21,
    fontWeight: "800",
    color: "#FFFFFF",
    marginTop: 4,
  },

  heroDose: {
    color: "#FFFFFF",
    marginTop: 3,
  },

  heroTime: {
    color: "#FFFFFF",
    marginTop: 7,
  },

  heroButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    borderRadius: 14,
    marginTop: 12,
  },

  heroButtonText: {
    textAlign: "center",
    color: "#2F6BFF",
    fontWeight: "600",
  },

  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },

  statCard: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 8,
    alignItems: "center",
    borderColor: "#EAF1FF",
    borderWidth: 1,
  },

  statIcon: {
    marginBottom: 8,
  },

  statValue: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2F6BFF",
  },

  statLabel: {
    marginTop: 6,
    color: "#6B7280",
    fontSize: 12,
    textAlign: "center",
  },

  progressCard: {
    backgroundColor: "#F8FAFC",
    borderRadius: 18,
    padding: 16,
    marginBottom: 18,
  },

  progressText: {
    marginBottom: 12,
    color: "#374151",
  },

  progressTrack: {
    height: 8,
    backgroundColor: "#E5E7EB",
    borderRadius: 999,
  },

  progressFill: {
    width: "43%",
    height: 8,
    backgroundColor: "#2F6BFF",
    borderRadius: 999,
  },

  alertCard: {
    backgroundColor: "#FFF7ED",
    borderRadius: 18,
    padding: 16,
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  alertText: {
    color: "#9A3412",
    fontWeight: "600",
  },

  alertAction: {
    color: "#EA580C",
    fontWeight: "700",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 12,
  },

  scheduleCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#F1F5F9",
  },

  medicationItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  medTime: {
    width: 70,
    color: "#6B7280",
    fontSize: 13,
  },

  statusDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 12,
    borderWidth: 2,
  },

  greenDot: {
    borderColor: "#22C55E",
  },

  blueDot: {
    borderColor: "#2563EB",
  },

  grayDot: {
    borderColor: "#D1D5DB",
  },

  medName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  medDose: {
    color: "#6B7280",
    marginTop: 2,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 16,
  },

  /* UPCOMING TODAY */

  upcomingCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,

    shadowColor: "#0F172A",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,

    elevation: 4,
  },

  upcomingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,

    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  upcomingTimeContainer: {
    width: 120,
    flexDirection: "row",
    alignItems: "center",
  },

  upcomingTime: {
    marginLeft: 8,
    color: "#2563EB",
    fontWeight: "600",
    fontSize: 14,
  },

  upcomingContent: {
    flex: 1,
  },

  upcomingName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  upcomingDosage: {
    marginTop: 3,
    color: "#6B7280",
  },

  /* NAVBAR */

  navbar: {
    position: "absolute",
    bottom: 14,
    left: 20,
    right: 20,
    backgroundColor: "rgba(255,255,255,0.96)",
    borderRadius: 28,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#E5EEF9",
    shadowColor: "#0F172A",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 10,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navLabel: {
    marginTop: 4,
    fontSize: 11,
    textAlign: "center",
    color: "#9CA3AF",
  },
  navLabelActive: {
    color: "#2563EB",
    fontWeight: "700",
  },
});
