import mongoose from "mongoose";
import dotenv from "dotenv";
import { faker } from "@faker-js/faker";

// Ensure we point to the correct env file
dotenv.config({ path: ".env.local" });

import User from "./src/models/User.js";
import Product from "./src/models/Product.js";
import Order from "./src/models/Order.js";
import Cart from "./src/models/Cart.js";
import Category from "./src/models/Category.js";

const MONGO_URI = process.env.MONGODB_URI;
if (!MONGO_URI) throw new Error("Please define MONGODB_URI in .env.local");

async function seed() {
  try {
    await mongoose.connect(MONGO_URI as string);
    console.log("✅ Connected to MongoDB");

    // --- Clear previous data ---
    await Promise.all([
      User.deleteMany({}),
      Product.deleteMany({}),
      Category.deleteMany({}),
      Cart.deleteMany({}),
      Order.deleteMany({}),
    ]);
    console.log("🧹 Cleared previous data");

    const categoryNames = ["electronics", "clothing", "books", "other"]; 
    const categories = await Promise.all(
    categoryNames.map(name =>
        Category.create({
        name,
        description: faker.lorem.sentence(),
        })
    )
    );

    const products = await Promise.all(
      Array.from({ length: 50 }).map(() => {
        const name = faker.commerce.productName();
        return Product.create({
          name,
          slug: faker.helpers.slugify(name).toLowerCase() + "-" + faker.string.nanoid(4),
          description: faker.commerce.productDescription(),
          price: Number(faker.commerce.price({ min: 10, max: 2000 })),
          stock: faker.number.int({ min: 0, max: 100 }),
          category: faker.helpers.arrayElement(categories).name,
          images: [faker.image.url({ width: 640, height: 480 })],
        });
      })
    );

    const users = await Promise.all(
      Array.from({ length: 15 }).map(() =>
        User.create({
          name: faker.person.fullName(),
          email: faker.internet.email(),
          password: "password123", 
        })
      )
    );

    for (const user of users) {
      const selectedProducts = faker.helpers.arrayElements(products, { min: 1, max: 3 });
      await Cart.create({
        user: user._id,
        products: selectedProducts.map(p => ({
          product: p._id,
          quantity: faker.number.int({ min: 1, max: 5 }),
        })),
      });
    }

    console.log(`✅ Seeded: ${categories.length} Categories, ${products.length} Products, ${users.length} Users`);

    await mongoose.disconnect();
    console.log("🔌 MongoDB connection closed");
  } catch (err) {
    console.error("❌ Error seeding data:", err);
    process.exit(1);
  }
}

seed();