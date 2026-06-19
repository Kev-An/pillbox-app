import API_BASE_URL from "../config/api";

let currentUserId = null;

export const setCurrentUserId = (userId) => {
  currentUserId = userId || null;
};

const request = async (path, options) => {
  const headers = {
    "Content-Type": "application/json",
    ...(options?.headers || {}),
  };

  if (currentUserId) {
    headers["x-user-id"] = currentUserId;
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
};

export const getAllMedications = async () => {
  return request("/medications");
};

export const createMedication = async (medication) => {
  return request("/medications", {
    method: "POST",
    body: JSON.stringify(medication),
  });
};

export const deleteMedication = async (id) => {
  return request(`/medications/${id}`, {
    method: "DELETE",
  });
};

export const updateMedication = async (id, medication) => {
  return request(`/medications/${id}`, {
    method: "PUT",
    body: JSON.stringify(medication),
  });
};

export const getDoseLogs = async () => {
  return request("/dose-logs");
};

export const markMedicationStatus = async (
  medicationId,
  scheduledTime,
  status,
) => {
  return request("/dose-logs/taken", {
    method: "POST",
    body: JSON.stringify({
      medicationId,
      scheduledTime,
      status,
    }),
  });
};

export const markMedicationTaken = async (medicationId, scheduledTime) =>
  markMedicationStatus(medicationId, scheduledTime, "TAKEN");

export const getTestUser = async () => {
  return request("/users/test-user");
};

export const loginUser = async (credentials) => {
  return request("/users/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
};

export const registerUser = async (payload) => {
  return request("/users/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

export const updateProfile = async (payload) => {
  return request("/users/profile", {
    method: "PUT",
    body: JSON.stringify(payload),
  });
};
