import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add MONGODB_URI to .env.local");
}

client = new MongoClient(uri);
clientPromise = client.connect();

export default clientPromise;