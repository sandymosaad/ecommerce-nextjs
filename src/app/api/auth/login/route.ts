import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
   try{
    await connectDB();
    const {email, password}= await req.json();

    const existingUser = await User.findOne({email});
    
    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    
    if (!isMatch) {
      return NextResponse.json({ error: "Wrong password" }, { status: 400 });
    }
    return NextResponse.json({
      message: "Logged in successfully",
      user: {
        email: existingUser.email,
        role: existingUser.role,
      },
    });
    } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Login failed" },
      { status: 500 }
    );
  }
}
   


