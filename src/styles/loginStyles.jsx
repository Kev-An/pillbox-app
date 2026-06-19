import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#F5FBFF",
  },

  brand: {
    alignItems: "center",
    marginBottom: 24,
  },

  logoMark: {
    alignItems: "center",
    backgroundColor: "#2563EB",
    borderRadius: 28,
    height: 56,
    justifyContent: "center",
    marginBottom: 10,
    shadowColor: "#2563EB",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 18,
    width: 56,
    elevation: 6,
  },

  logo: {
    color: "#102D4F",
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
  },

  heading: {
    color: "#102D4F",
    fontSize: 31,
    fontWeight: "800",
    letterSpacing: 0,
    marginBottom: 10,
  },

  subHeading: {
    color: "#5B7190",
    fontSize: 15,
    lineHeight: 21,
    marginBottom: 28,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E5EEF9",
    borderRadius: 18,
    borderWidth: 1,
    color: "#102D4F",
    fontSize: 16,
    marginBottom: 14,
    minHeight: 54,
    paddingHorizontal: 16,
  },

  loginButton: {
    alignItems: "center",
    backgroundColor: "#2563EB",
    borderRadius: 24,
    justifyContent: "center",
    marginTop: 8,
    minHeight: 56,
    shadowColor: "#2563EB",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.22,
    shadowRadius: 20,
    elevation: 7,
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  demoButton: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#DDEBFF",
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    marginTop: 14,
    minHeight: 52,
  },

  demoText: {
    color: "#2563EB",
    fontSize: 14,
    fontWeight: "800",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 28,
  },

  footerText: {
    color: "#5B7190",
  },

  signupText: {
    color: "#2563EB",
    fontWeight: "800",
    marginLeft: 5,
  },
});
