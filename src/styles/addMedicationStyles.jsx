import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FBFF",
  },

  topBar: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
    marginHorizontal: 20,
    marginTop: 18,
  },

  backButton: {
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

  headerSpacer: {
    height: 44,
    width: 44,
  },

  header: {
    color: "#102D4F",
    flex: 1,
    fontSize: 26,
    fontWeight: "800",
    letterSpacing: 0,
    textAlign: "center",
  },

  label: {
    color: "#102D4F",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 8,
    marginHorizontal: 20,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E5EEF9",
    borderRadius: 18,
    borderWidth: 1,
    color: "#102D4F",
    fontSize: 16,
    marginBottom: 18,
    marginHorizontal: 20,
    minHeight: 54,
    justifyContent: "center",
    paddingHorizontal: 16,
  },

  instructions: {
    minHeight: 104,
    paddingTop: 14,
    textAlignVertical: "top",
  },

  frequencyRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 18,
    marginHorizontal: 20,
  },

  frequencyButton: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#E5EEF9",
    borderRadius: 16,
    borderWidth: 1,
    flex: 1,
    minHeight: 46,
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  frequencyActive: {
    backgroundColor: "#2563EB",
    borderColor: "#2563EB",
  },

  frequencyText: {
    color: "#5B7190",
    fontSize: 12,
    fontWeight: "800",
  },

  frequencyTextActive: {
    color: "#FFFFFF",
  },

  saveButton: {
    alignItems: "center",
    backgroundColor: "#2563EB",
    borderRadius: 28,
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 12,
    marginBottom: 36,
    minHeight: 58,
    shadowColor: "#2563EB",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.22,
    shadowRadius: 20,
    elevation: 7,
  },

  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
});
