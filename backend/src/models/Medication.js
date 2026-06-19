import mongoose from "mongoose";

const medicationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    icon: {
      type: String,
      default: "medical",
    },

    dosage: {
      type: String,
      required: true,
    },

    instructions: {
      type: String,
      default: "",
    },

    times: [
      {
        type: String,
      },
    ],

    frequency: {
      type: String,
      enum: ["DAILY", "WEEKLY", "CUSTOM"],
      default: "DAILY",
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      default: null,
    },

    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Medication", medicationSchema);
