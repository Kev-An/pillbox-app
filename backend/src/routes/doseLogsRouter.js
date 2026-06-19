import express from "express";

import {
  getDoseLogs,
  markMedicationTaken,
} from "../controllers/doseLogsController.js";

const router = express.Router();

router.get("/", getDoseLogs);

router.post("/taken", markMedicationTaken);

export default router;
