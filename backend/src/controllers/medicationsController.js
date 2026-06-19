import mongoose from "mongoose";

import Medication from "../models/Medication.js";
import asyncHandler from "../utils/asyncHandler.js";
import { getCurrentUser } from "../utils/currentUser.js";

// GET ALL MEDICATIONS

const getAllMedications = asyncHandler(async (req, res) => {
  const user = await getCurrentUser(req);
  const query = req.header("x-user-id")
    ? { userId: user._id }
    : {
        $or: [{ userId: user._id }, { userId: { $exists: true } }],
      };

  let medications = await Medication.find(query).sort({
    createdAt: -1,
  });

  if (req.header("x-user-id") && medications.length === 0) {
    medications = await Medication.find().sort({ createdAt: -1 });
  }

  res.status(200).json({
    success: true,
    count: medications.length,
    data: medications,
  });
});

// GET MEDICATION BY ID

const getMedicationById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid medication ID",
    });
  }

  const medication = await Medication.findById(id);

  if (!medication) {
    return res.status(404).json({
      success: false,
      message: "Medication not found",
    });
  }

  res.status(200).json({
    success: true,
    data: medication,
  });
});

// CREATE MEDICATION

const createMedication = asyncHandler(async (req, res) => {
  const user = await getCurrentUser(req);

  const medication = await Medication.create({
    ...req.body,
    userId: req.body.userId || user._id,
  });

  res.status(201).json({
    success: true,
    data: medication,
  });
});

// UPDATE MEDICATION

const updateMedication = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await getCurrentUser(req);

  let medication = await Medication.findOneAndUpdate(
    req.header("x-user-id") ? { _id: id, userId: user._id } : { _id: id },
    req.body,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!medication && req.header("x-user-id")) {
    medication = await Medication.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
  }

  if (!medication) {
    return res.status(404).json({
      success: false,
      message: "Medication not found",
    });
  }

  res.status(200).json({
    success: true,
    data: medication,
  });
});

// DELETE MEDICATION

const deleteMedication = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await getCurrentUser(req);

  let medication = await Medication.findOneAndDelete(
    req.header("x-user-id") ? { _id: id, userId: user._id } : { _id: id },
  );

  if (!medication && req.header("x-user-id")) {
    medication = await Medication.findByIdAndDelete(id);
  }

  if (!medication) {
    return res.status(404).json({
      success: false,
      message: "Medication not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Medication deleted successfully",
  });
});

export {
  getAllMedications,
  getMedicationById,
  createMedication,
  updateMedication,
  deleteMedication,
};
