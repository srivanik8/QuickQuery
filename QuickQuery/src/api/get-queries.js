import { connectToDatabase } from './utils/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const client = await connectToDatabase();
    const database = client.db("quickquery");
    const collection = database.collection("query");

    const queries = await collection.find({}).toArray();
    
    await client.close();
    res.status(200).json(queries);
  } catch (error) {
    console.error("Error fetching queries:", error);
    res.status(500).json({ message: "Error fetching queries" });
  }
}