import express from 'express'
import { MongoClient, ObjectId } from 'mongodb';
import cors from 'cors';

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
app.get('/api/get-queries', async (req, res) => {
    try {
      await client.connect();
      const database = client.db("quickquery");
      const collection = database.collection("query");
  
      const queries = await collection.find({}).toArray();
      
      res.json(queries);
    } catch (error) {
      console.error("Error fetching queries:", error);
      res.status(500).json({ message: "Error fetching queries" });
    } finally {
      await client.close();
    }
  });
  app.get('/api/posts', async (req, res) => {
    try {
      await client.connect();
      const database = client.db("quickquery");
      const collection = database.collection("posts");
      const posts = await db.collection("posts").find().sort({ createdAt: -1 }).toArray();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Error fetching posts" });
    }
  });
  
  app.post('/api/posts', async (req, res) => {
    try {
      await client.connect();
      const database = client.db("quickquery");
      const collection = database.collection("posts");
      const { content } = req.body;
      const newPost = {
        content,
        createdAt: new Date()
      };
      const result = await db.collection("posts").insertOne(newPost);
      res.status(201).json({ message: "Post created", id: result.insertedId });
    } catch (error) {
      res.status(500).json({ message: "Error creating post" });
    }
  });


const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});