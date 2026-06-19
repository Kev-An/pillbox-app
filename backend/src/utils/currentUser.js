import User from "../models/User.js";
import { getDefaultUser } from "./defaultUser.js";

export const getCurrentUser = async (req) => {
  const userId = req.header("x-user-id");

  if (userId) {
    const user = await User.findById(userId);

    if (user) {
      return user;
    }
  }

  return getDefaultUser();
};
