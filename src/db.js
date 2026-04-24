import { MongoClient } from "mongodb";

const uri = process.env.BETTER_AUTH_MONGODB_URI;

if (!uri) {
  throw new Error("Missing BETTER_AUTH_MONGODB_URI");
}

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export { clientPromise };