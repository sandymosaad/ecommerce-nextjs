import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

import User from "./src/models/User";
import Product from "./src/models/Product";
import Order from "./src/models/Order";
import Cart from "./src/models/Cart";
import Category from "./src/models/Category";

const MONGO_URI = process.env.MONGODB_URI;
if (!MONGO_URI) throw new Error("Please define MONGODB_URI in .env.local");

async function main() {
  try {
    await mongoose.connect(MONGO_URI as string);
    console.log("✅ Connected to MongoDB");

    const electronics = await Category.create({
      name: "electronics",
      description: "Electronic devices and gadgets",
    });

    const product = await Product.create({
      name: "iPhone 15 Pro",
      slug: "iphone-15-pro",
      description: "Latest iPhone with amazing features",
      price: 1200,
      stock: 50,
      category: electronics.name,
      images: ["https://example.com/iphone.jpg"],
    });

    const user = await User.create({
      name: "Sandy",
      email: "sandy@test.com",
      password: "123456",
    });

    const cart = await Cart.create({
      user: user._id,
      products: [{ product: product._id, quantity: 2 }],
    });

    const order = await Order.create({
      user: user._id,
      products: [{ product: product._id, quantity: 2 }],
      totalPrice: product.price * 2,
      shippingAddress: "123 Street, City, Country",
    });

    console.log("✅ Sample data created successfully!");
    console.log({
      user: JSON.stringify(user, null, 2),
      product: JSON.stringify(product, null, 2),
      cart: JSON.stringify(cart, null, 2),
      order: JSON.stringify(order, null, 2),
      electronics: JSON.stringify(electronics, null, 2),
    });

    await mongoose.disconnect();
    console.log("✅ Disconnected from MongoDB");
  } catch (err) {
    console.error("❌ FULL ERROR:", err);
  }
}

main();