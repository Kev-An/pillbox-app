import Constants from "expo-constants";
import { Platform } from "react-native";

const API_PORT = 3000;
const FALLBACK_HOST = "192.168.1.4";

const getHostFromExpo = () => {
  const hostUri =
    Constants.expoConfig?.hostUri ||
    Constants.manifest2?.extra?.expoGo?.debuggerHost ||
    Constants.manifest?.debuggerHost;

  return hostUri?.split(":")[0];
};

const getApiHost = () => {
  if (Platform.OS === "web" && typeof window !== "undefined") {
    return window.location.hostname;
  }

  return getHostFromExpo() || FALLBACK_HOST;
};

const API_BASE_URL = `http://${getApiHost()}:${API_PORT}/api`;

export default API_BASE_URL;
