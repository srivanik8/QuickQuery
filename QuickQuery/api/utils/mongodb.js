import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const uri = import.meta.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}
export async function connectToDatabase() {
  const client = new MongoClient(uri);
  await client.connect();
  return client;
}