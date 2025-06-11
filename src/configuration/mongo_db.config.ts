import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/myapp");
    console.log("MongoDB connected ✅");
  } catch (error) {
    console.error("MongoDB error ❌", error);
  }
};
