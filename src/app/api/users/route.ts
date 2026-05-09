import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
	try {
		const body = await request.json();
		const { id, updates } = body;

		if (!id) {
			return NextResponse.json({ error: "Missing user id" }, { status: 400 });
		}

		await connectDB();

		const user = await User.findByIdAndUpdate(id, { $set: updates }, { new: true }).lean();

		if (!user) {
			return NextResponse.json({ error: "User not found" }, { status: 404 });
		}

		return NextResponse.json({ user });
	} catch (err: any) {
		console.error("Error in users PATCH:", err);
		return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
	}
}

export async function GET() {
	return NextResponse.json({ message: "Use PATCH to update a user" });
}
