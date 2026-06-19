import express from "express";
import {
  getTestUser,
  loginUser,
  registerUser,
  updateProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/test-user", getTestUser);
router.put("/profile", updateProfile);

export default router;
