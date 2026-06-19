import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  getTestUser,
  loginUser,
  registerUser,
  setCurrentUserId,
  updateProfile,
} from "../services/medicationService";

const SESSION_KEY = "pillbox.session";
const AuthContext = createContext(null);

const storage = {
  getItem(key) {
    if (typeof window === "undefined" || !window.localStorage) {
      return null;
    }

    return window.localStorage.getItem(key);
  },
  setItem(key, value) {
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem(key, value);
    }
  },
  removeItem(key) {
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.removeItem(key);
    }
  },
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const applyUser = useCallback((nextUser) => {
    setUser(nextUser);
    setCurrentUserId(nextUser?._id);

    if (nextUser) {
      storage.setItem(SESSION_KEY, JSON.stringify(nextUser));
      return;
    }

    storage.removeItem(SESSION_KEY);
  }, []);

  useEffect(() => {
    const storedUser = storage.getItem(SESSION_KEY);

    if (storedUser) {
      try {
        applyUser(JSON.parse(storedUser));
      } catch {
        storage.removeItem(SESSION_KEY);
      }
    }

    setIsReady(true);
  }, [applyUser]);

  const login = useCallback(
    async ({ email, password }) => {
      const response = await loginUser({ email, password });

      applyUser(response.data);
      return response.data;
    },
    [applyUser],
  );

  const register = useCallback(
    async ({ email, name, password }) => {
      const response = await registerUser({ email, name, password });

      applyUser(response.data);
      return response.data;
    },
    [applyUser],
  );

  const continueAsDemo = useCallback(async () => {
    const response = await getTestUser();

    applyUser(response.data);
    return response.data;
  }, [applyUser]);

  const saveProfile = useCallback(
    async (updates) => {
      const response = await updateProfile(updates);

      applyUser(response.data);
      return response.data;
    },
    [applyUser],
  );

  const logout = useCallback(() => {
    applyUser(null);
  }, [applyUser]);

  const value = useMemo(
    () => ({
      continueAsDemo,
      isAuthenticated: !!user,
      isReady,
      login,
      logout,
      register,
      saveProfile,
      user,
    }),
    [
      continueAsDemo,
      isReady,
      login,
      logout,
      register,
      saveProfile,
      user,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
