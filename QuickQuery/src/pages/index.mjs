import express from 'express'
import { MongoClient } from 'mongodb'


const app = express();
app.use(express.json());

const uri = "mongodb+srv://sri:sri@cluster0.vifycra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
app.get('/', (req, res) => {
    res.send('Backend server is running');
  });
  

app.post('/api/save-query', async (req, res) => {
  try {
    await client.connect();
    const database = client.db("quickquery");
    const collection = database.collection("query");

    const result = await collection.insertOne(req.body);
    
    res.json({ message: "Query saved successfully", id: result.insertedId });
  } catch (error) {
    console.error("Error saving query:", error);
    res.status(500).json({ message: "Error saving query" });
  } finally {
    await client.close();
  }
});

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});