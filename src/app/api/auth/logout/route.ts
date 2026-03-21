import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({
    message: "Logged out successfully",
  });

  response.cookies.set("token", "", {
    expires: new Date(0),
  });

  response.cookies.set("name", "", {
    expires: new Date(0),
  });

  return response;
}