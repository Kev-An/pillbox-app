import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FBFF",
  },

  scrollContent: {
    paddingBottom: 112,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 18,
  },

  topBar: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  iconButton: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#E5EEF9",
    borderRadius: 22,
    borderWidth: 1,
    height: 44,
    justifyContent: "center",
    shadowColor: "#0F172A",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    width: 44,
    elevation: 4,
  },

  addButton: {
    backgroundColor: "#2563EB",
    borderColor: "#2563EB",
    shadowColor: "#2563EB",
    shadowOpacity: 0.2,
  },

  titleWrap: {
    alignItems: "center",
  },

  title: {
    color: "#102D4F",
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: 0,
  },

  subtitle: {
    color: "#5B7190",
    fontSize: 13,
    marginTop: 4,
  },

  medicationCard: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E5EEF9",
    borderRadius: 22,
    borderWidth: 1,
    marginBottom: 14,
    padding: 16,
    shadowColor: "#0F172A",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.06,
    shadowRadius: 18,
    elevation: 3,
  },

  medicationPressArea: {
    flexDirection: "row",
  },

  iconWrap: {
    alignItems: "center",
    backgroundColor: "#E9F7FF",
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    marginRight: 14,
    width: 40,
  },

  medicationContent: {
    flex: 1,
  },

  medicationHeader: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },

  medicationName: {
    color: "#102D4F",
    flex: 1,
    fontSize: 17,
    fontWeight: "800",
  },

  pill: {
    backgroundColor: "#E9F7FF",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  pillText: {
    color: "#2563EB",
    fontSize: 11,
    fontWeight: "800",
  },

  dosage: {
    color: "#5B7190",
    fontSize: 14,
    marginTop: 5,
  },

  instructions: {
    color: "#71839D",
    fontSize: 13,
    lineHeight: 18,
    marginTop: 8,
  },

  timeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 12,
  },

  timeChip: {
    backgroundColor: "#F5FBFF",
    borderColor: "#DDEBFF",
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  timeText: {
    color: "#2563EB",
    fontSize: 12,
    fontWeight: "700",
  },

  actionRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 14,
  },

  actionButton: {
    alignItems: "center",
    borderRadius: 16,
    flex: 1,
    flexDirection: "row",
    gap: 7,
    justifyContent: "center",
    minHeight: 46,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.16,
    shadowRadius: 14,
    elevation: 4,
  },

  takenButton: {
    backgroundColor: "#22C55E",
    shadowColor: "#22C55E",
  },

  deleteButton: {
    backgroundColor: "#EF4444",
    shadowColor: "#EF4444",
  },

  editButton: {
    backgroundColor: "#2563EB",
    shadowColor: "#2563EB",
  },

  actionButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },

  statusRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },

  statusButton: {
    alignItems: "center",
    backgroundColor: "#F5FBFF",
    borderColor: "#DDEBFF",
    borderRadius: 14,
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    minHeight: 40,
  },

  statusButtonText: {
    color: "#5B7190",
    fontSize: 12,
    fontWeight: "800",
  },

  emptyCard: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#E5EEF9",
    borderRadius: 24,
    borderWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 36,
  },

  emptyTitle: {
    color: "#102D4F",
    fontSize: 20,
    fontWeight: "800",
    marginTop: 14,
    textAlign: "center",
  },

  emptyText: {
    color: "#5B7190",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
    textAlign: "center",
  },
});
