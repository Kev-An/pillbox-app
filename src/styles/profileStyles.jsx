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

  title: {
    color: "#102D4F",
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: 0,
    marginBottom: 20,
    textAlign: "center",
  },

  profileCard: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#E5EEF9",
    borderRadius: 24,
    borderWidth: 1,
    marginBottom: 16,
    padding: 24,
    shadowColor: "#0F172A",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 4,
  },

  avatar: {
    alignItems: "center",
    backgroundColor: "#2563EB",
    borderRadius: 42,
    height: 84,
    justifyContent: "center",
    marginBottom: 16,
    shadowColor: "#2563EB",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.22,
    shadowRadius: 18,
    width: 84,
    elevation: 5,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "800",
  },

  name: {
    color: "#102D4F",
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
  },

  email: {
    color: "#5B7190",
    fontSize: 14,
    marginTop: 6,
    textAlign: "center",
  },

  formCard: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E5EEF9",
    borderRadius: 22,
    borderWidth: 1,
    marginBottom: 16,
    overflow: "hidden",
  },

  fieldRow: {
    alignItems: "center",
    borderBottomColor: "#F1F5F9",
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  notificationRow: {
    alignItems: "center",
    flexDirection: "row",
    padding: 16,
  },

  rowIcon: {
    alignItems: "center",
    backgroundColor: "#E9F7FF",
    borderRadius: 18,
    height: 36,
    justifyContent: "center",
    marginRight: 12,
    width: 36,
  },

  rowContent: {
    flex: 1,
  },

  rowLabel: {
    color: "#5B7190",
    fontSize: 12,
    fontWeight: "800",
  },

  rowValue: {
    color: "#102D4F",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 4,
  },

  input: {
    color: "#102D4F",
    fontSize: 15,
    fontWeight: "700",
    minHeight: 36,
    paddingVertical: 0,
  },

  saveButton: {
    alignItems: "center",
    backgroundColor: "#2563EB",
    borderRadius: 22,
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    minHeight: 54,
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

  logoutButton: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#FECACA",
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    marginTop: 12,
    minHeight: 50,
  },

  logoutButtonText: {
    color: "#EF4444",
    fontSize: 15,
    fontWeight: "800",
  },
});
