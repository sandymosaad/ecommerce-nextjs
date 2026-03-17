import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error("Please add MONGODB_URI to .env.local");
}

export default async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(uri);
}