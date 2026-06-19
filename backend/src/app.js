import "dotenv/config";

import express from "express";
import cors from "cors";
import morgan from "morgan";
import errorHandler from "./middleware/errorHandler.js";

import medicationsRouter from "./routes/medicationsRouter.js";
import doseLogsRouter from "./routes/doseLogsRouter.js";
import userRouter from "./routes/userRouter.js";
import healthRouter from "./routes/healthRouter.js";

const app = express();

// Middleware

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes

app.use("/health", healthRouter);

app.use("/api/users", userRouter);

app.use("/api/medications", medicationsRouter);
app.use("/api/dose-logs", doseLogsRouter);
app.use(errorHandler);

export default app;
