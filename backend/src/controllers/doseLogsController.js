import DoseLog from "../models/DoseLog.js";
import Medication from "../models/Medication.js";
import asyncHandler from "../utils/asyncHandler.js";
import { getCurrentUser } from "../utils/currentUser.js";

const getDoseLogs = asyncHandler(async (req, res) => {
  const user = await getCurrentUser(req);
  const { startDate, endDate } = req.query;

  const query = req.header("x-user-id") ? { userId: user._id } : {};

  if (startDate || endDate) {
    query.scheduledTime = {};

    if (startDate) {
      query.scheduledTime.$gte = new Date(startDate);
    }

    if (endDate) {
      query.scheduledTime.$lte = new Date(endDate);
    }
  }

  const logs = await DoseLog.find(query)
    .populate("medicationId")
    .sort({ scheduledTime: -1 });

  res.status(200).json({
    success: true,
    count: logs.length,
    data: logs,
  });
});

const markMedicationTaken = asyncHandler(async (req, res) => {
  const user = await getCurrentUser(req);
  const { medicationId, scheduledTime, status = "TAKEN" } = req.body;

  const medication = await Medication.findById(medicationId);

  if (!medication) {
    return res.status(404).json({
      success: false,
      message: "Medication not found",
    });
  }

  const scheduleDate = scheduledTime ? new Date(scheduledTime) : new Date();

  const log = await DoseLog.findOneAndUpdate(
    {
      userId: user._id,
      medicationId,
      scheduledTime: scheduleDate,
    },
    {
      userId: user._id,
      medicationId,
      scheduledTime: scheduleDate,
      takenAt: status === "TAKEN" ? new Date() : null,
      status,
    },
    {
      new: true,
      setDefaultsOnInsert: true,
      upsert: true,
    },
  ).populate("medicationId");

  res.status(200).json({
    success: true,
    data: log,
  });
});

export { getDoseLogs, markMedicationTaken };
