import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { name, email, password, role } = await req.json();

    //console.log("Received signup data:", { name, email, password, role });

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 });
    }

    if (!password || password.length < 6) {
      return NextResponse.json({ error: "Password too short" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, email, password: hashedPassword, role });
    const { password: _, ...safeUser } = newUser.toObject();

    return NextResponse.json({ message: "User created successfully", user: safeUser });
  } catch (err: any) {
    //console.error("Error creating user:", err);
    return NextResponse.json({ error: err.message || "Failed to create user" }, { status: 500 });
  }
}