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
    marginBottom: 20,
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

  searchBox: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#E5EEF9",
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: "row",
    marginBottom: 14,
    minHeight: 52,
    paddingHorizontal: 14,
  },

  searchInput: {
    color: "#102D4F",
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
  },

  filterRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 18,
  },

  filterChip: {
    backgroundColor: "#FFFFFF",
    borderColor: "#DDEBFF",
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },

  filterChipActive: {
    backgroundColor: "#2563EB",
    borderColor: "#2563EB",
  },

  filterText: {
    color: "#5B7190",
    fontSize: 12,
    fontWeight: "800",
  },

  filterTextActive: {
    color: "#FFFFFF",
  },

  dateRangeCard: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E5EEF9",
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
    marginBottom: 18,
    padding: 12,
  },

  dateButton: {
    alignItems: "center",
    backgroundColor: "#F5FBFF",
    borderColor: "#DDEBFF",
    borderRadius: 16,
    borderWidth: 1,
    flex: 1,
    flexDirection: "row",
    gap: 10,
    minHeight: 58,
    paddingHorizontal: 12,
  },

  dateButtonLabel: {
    color: "#5B7190",
    fontSize: 11,
    fontWeight: "800",
  },

  dateButtonValue: {
    color: "#102D4F",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 3,
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

  cardHeader: {
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

  statusPill: {
    backgroundColor: "#EAF7EF",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  statusText: {
    color: "#168A4A",
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

  metaRow: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 12,
  },

  metaText: {
    color: "#2563EB",
    fontSize: 12,
    fontWeight: "700",
    marginLeft: 6,
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
