import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


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
      const token = jwt.sign(
      { userId: existingUser._id, role: existingUser.role },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json({
      message: "Logged in successfully",
      user: {
        email: existingUser.email,
        role: existingUser.role,
        name: existingUser.name,
      },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
    });

    response.cookies.set("name", existingUser.name, {
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
    } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Login failed" },
      { status: 500 }
    );
  }
}
   


