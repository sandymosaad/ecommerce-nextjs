import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";
import mongoose from "mongoose";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_req: Request, context: RouteContext) {
  try {
    await connectDB();
    const { id } = await context.params;

    const product = mongoose.Types.ObjectId.isValid(id)
      ? await Product.findById(id)
      : await Product.findOne({ slug: id.toLowerCase() });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch product by id:", error);
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}