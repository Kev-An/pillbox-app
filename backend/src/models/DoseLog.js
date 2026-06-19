import mongoose from "mongoose";

const doseLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    medicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Medication",
      required: true,
    },

    scheduledTime: {
      type: Date,
      required: true,
    },

    takenAt: {
      type: Date,
      default: null,
    },

    status: {
      type: String,
      enum: ["PENDING", "TAKEN", "MISSED", "SKIPPED"],
      default: "PENDING",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("DoseLog", doseLogSchema);
