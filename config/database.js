import mongoose from "mongoose";
import { MONGODB_URI } from "@/constants";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("Already connected to database");
    return;
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(MONGODB_URI);
    connected = true;
  } catch (error) {
    console.error(error);
  }
};

export { connectDB };
