import { connectToDatabase } from './utils/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const client = await connectToDatabase();
    const database = client.db("quickquery");
    const collection = database.collection("query");

    const result = await collection.insertOne(req.body);
    
    await client.close();
    res.status(200).json({ message: "Query saved successfully", id: result.insertedId });
  } catch (error) {
    console.error("Error saving query:", error);
    res.status(500).json({ message: "Error saving query" });
  }
}