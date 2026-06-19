import User from "../models/User.js";
import { hashPassword } from "./password.js";

const DEFAULT_USER = {
  firebaseUid: "test123",
  name: "Kevin Anthony",
  email: "kevin@example.com",
  passwordHash: hashPassword("password123"),
};

export const getDefaultUser = async () => {
  const user = await User.findOneAndUpdate(
    { firebaseUid: DEFAULT_USER.firebaseUid },
    DEFAULT_USER,
    {
      new: true,
      setDefaultsOnInsert: true,
      upsert: true,
    },
  );

  return user;
};
