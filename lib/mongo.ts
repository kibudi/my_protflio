// lib/mongodb.ts
import mongoose, { Mongoose } from "mongoose";

interface Cached {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  var mongoose: Cached | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("⚠️ Please define MONGODB_URI in .env.local");
}

const cached: Cached = global.mongoose || { conn: null, promise: null };

export async function connectToDatabase(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { dbName: "portfolio" })
      .then((m) => m);
  }

  cached.conn = await cached.promise;
  global.mongoose = cached; 
  return cached.conn;
}
