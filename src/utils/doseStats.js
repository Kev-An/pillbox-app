const pad = (value) => String(value).padStart(2, "0");

export const getDateKey = (date) => {
  const parsedDate = new Date(date);

  return [
    parsedDate.getFullYear(),
    pad(parsedDate.getMonth() + 1),
    pad(parsedDate.getDate()),
  ].join("-");
};

export const getStartOfDay = (date = new Date()) => {
  const start = new Date(date);

  start.setHours(0, 0, 0, 0);

  return start;
};

export const getEndOfDay = (date = new Date()) => {
  const end = new Date(date);

  end.setHours(23, 59, 59, 999);

  return end;
};

export const buildScheduledDose = (medication, time, date = new Date()) => {
  const [hours = "0", minutes = "0"] = (time || "00:00").split(":");
  const scheduledTime = new Date(date);

  scheduledTime.setHours(Number(hours), Number(minutes), 0, 0);

  return {
    id: `${medication._id}-${time}-${getDateKey(scheduledTime)}`,
    medication,
    medicationId: medication._id,
    name: medication.name,
    dosage: medication.dosage,
    time,
    scheduledTime,
  };
};

export const getScheduledDosesForDate = (
  medications,
  date = new Date(),
) => {
  return medications
    .flatMap((medication) => {
      const times = medication.times?.length ? medication.times : ["00:00"];

      return times.map((time) => buildScheduledDose(medication, time, date));
    })
    .sort((a, b) => a.scheduledTime.getTime() - b.scheduledTime.getTime());
};

export const hasTakenLogForDose = (logs, dose) => {
  return logs.some((log) => {
    const logMedicationId =
      log.medicationId?._id || log.medicationId || log.medication;

    return (
      log.status === "TAKEN" &&
      String(logMedicationId) === String(dose.medicationId) &&
      new Date(log.scheduledTime).getTime() === dose.scheduledTime.getTime()
    );
  });
};

export const getTodayStats = (
  medications,
  doseLogs,
  now = new Date(),
) => {
  const scheduledDoses = getScheduledDosesForDate(medications, now);
  const takenDoses = scheduledDoses.filter((dose) =>
    hasTakenLogForDose(doseLogs, dose),
  );
  const dueNowDoses = scheduledDoses.filter(
    (dose) =>
      dose.scheduledTime.getTime() <= now.getTime() &&
      !hasTakenLogForDose(doseLogs, dose),
  );

  const takenPercent = scheduledDoses.length
    ? Math.round((takenDoses.length / scheduledDoses.length) * 100)
    : 0;

  return {
    dueNowDoses,
    scheduledDoses,
    takenDoses,
    takenPercent,
  };
};

export const getDoseStreak = (doseLogs) => {
  const takenDays = new Set(
    doseLogs
      .filter((log) => log.status === "TAKEN")
      .map((log) => getDateKey(log.takenAt || log.scheduledTime)),
  );
  let streak = 0;
  const cursor = getStartOfDay();

  while (takenDays.has(getDateKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
};
