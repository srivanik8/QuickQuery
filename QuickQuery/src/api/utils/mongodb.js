
import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://sri:sri@cluster0.vifycra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export async function connectToDatabase() {
  const client = new MongoClient(uri);
  await client.connect();
  return client;
}