import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";
import { getCurrentUser } from "../utils/currentUser.js";
import { getDefaultUser } from "../utils/defaultUser.js";
import { hashPassword, verifyPassword } from "../utils/password.js";

const serializeUser = (user) => ({
  _id: user._id,
  name: user.name,
  email: user.email,
  photoUrl: user.photoUrl,
  timezone: user.timezone,
  notificationEnabled: user.notificationEnabled,
});

// TEST USER CREATION

const getTestUser = asyncHandler(async (req, res) => {
  const user = await getCurrentUser(req);

  res.status(200).json({
    success: true,
    data: serializeUser(user),
  });
});

const registerUser = asyncHandler(async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and password are required",
    });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const existingUser = await User.findOne({ email: normalizedEmail });

  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: "An account with this email already exists",
    });
  }

  const user = await User.create({
    firebaseUid: `local:${normalizedEmail}`,
    name: name.trim(),
    email: normalizedEmail,
    passwordHash: hashPassword(password),
  });

  res.status(201).json({
    success: true,
    data: serializeUser(user),
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  const user = await User.findOne({
    email: email.trim().toLowerCase(),
  }).select("+passwordHash");

  if (!user || !verifyPassword(password, user.passwordHash)) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  res.status(200).json({
    success: true,
    data: serializeUser(user),
  });
});

const updateProfile = asyncHandler(async (req, res) => {
  const user = await getCurrentUser(req);
  const allowedFields = [
    "name",
    "email",
    "photoUrl",
    "timezone",
    "notificationEnabled",
  ];
  const updates = {};

  allowedFields.forEach((field) => {
    if (req.body[field] !== undefined) {
      updates[field] = req.body[field];
    }
  });

  const updatedUser = await User.findByIdAndUpdate(user._id, updates, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: serializeUser(updatedUser),
  });
});

// GET ALL USERS

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
});

// GET USER BY ID

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

export { getTestUser, getAllUsers, getUserById, loginUser, registerUser, updateProfile };
