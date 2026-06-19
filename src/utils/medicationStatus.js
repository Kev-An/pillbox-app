export const isCompletedMedication = (medication) => {
  if (!medication) {
    return false;
  }

  if (medication.active === false) {
    return true;
  }

  if (!medication.endDate) {
    return false;
  }

  return new Date(medication.endDate).getTime() < Date.now();
};

export const isTrackedMedication = (medication) =>
  medication?.active !== false && !isCompletedMedication(medication);
