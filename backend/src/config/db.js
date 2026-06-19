import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
    console.log("MONGO_URI =", process.env.MONGO_URI);
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);

    process.exit(1);
  }
};

export default connectDB;
