import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" }); 

const uri = process.env.MONGODB_URI;

if (!uri) throw new Error("Please define MONGODB_URI in .env.local");

const client = new MongoClient(uri);
const clientPromise = client.connect();

async function createCollections() {
  const db = (await clientPromise).db("ecommerce");

  await db.createCollection("users");
  await db.createCollection("products");
  await db.createCollection("orders");
  await db.createCollection("coupons");

  console.log("Collections created!");

  await db.collection("products").insertOne({
    title: "Sample Product",
    description: "This is a sample product",
    price: 100,
    category: "Sample Category",
    images: [],
    stock: 10,
    reviews: []
  });

  console.log("Sample product added!");
}

createCollections().catch(console.error);