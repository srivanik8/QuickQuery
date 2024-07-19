import React from "react";
import dotenv from 'dotenv';
import Header from "../components/header";
import Container from "react-bootstrap/Container"
import {Row , Col} from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { useState } from "react";
import Highlight from 'react-highlight';
import 'highlight.js/styles/atom-one-dark.css';


function QuickQuery(){
    const [content, setContent] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [database, setDataBase] = useState('');
    const [collection, setCollection] = useState('');
    const [query, setQuery] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    ///////////////////////////////////////////////////////////
    async function saveToMongoDB(query, generatedCode, language) {
      try {
        const response = await fetch('/api/save-query', {  // Update this URL to match your backend port
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query,
            generatedCode,
            language,
            timestamp: new Date(),
          }),
        });
    
        if (!response.ok) {
          throw new Error('Failed to save query');
        }
    
        const result = await response.json();
        console.log('Query saved:', result);
      } catch (error) {
        console.error('Error saving query:', error);
      }
    }
    //////////////////////////////////////////////////////////
    const model = new ChatGoogleGenerativeAI({
        modelName: "gemini-1.5-flash",
        maxOutputTokens: 2048,
        apikey : 'AIzaSyCZ7YpN_LGG4V73cvYUMFcaZ6fAr_ELGng' ,
      });
      
      async function fetchBotReply(database , collection , query , language) {
        try {
          const prompt = `
                  You are a code generator. Generate code for "${query}" based on the given prompt where database name is ${database} and collection name is ${collection}. The code should be in ${language}. Don't change the MongoDB URI. Don't specify the coding language, and don't use any quotes to cover the code unless necessary. Just give the code.

          ###
          Example:
          output: To read data from mongoDB
          message: 
          const { MongoClient } = require("mongodb");
      // Replace the uri string with your MongoDB deployment's connection string.
      const uri =
        "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";
      const client = new MongoClient(uri);
      async function run() {
        try {
          await client.connect();
          // database and collection code goes here
          const db = client.db("sample_guides");
          const coll = db.collection("planets");
      
          // find code goes here
          const cursor = coll.find();
      
          // iterate code goes here
          await cursor.forEach(console.log);
        } finally {
          // Ensures that the client will close when you finish/error
          await client.close();
        }
      }
      run().catch(console.dir);
          example : 
          output: to insert data into mongoDB
          message: 
          const { MongoClient } = require("mongodb");
      // Replace the uri string with your MongoDB deployment's connection string.
      const uri =
      "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";
      
      const client = new MongoClient(uri);
      
      async function run() {
        try {
          await client.connect();
          // database and collection code goes here
          const db = client.db("sample_guides");
          const coll = db.collection("comets");
      
          // insert code goes here
          const docs = [
            {name: "Halley's Comet", officialName: "1P/Halley", orbitalPeriod: 75, radius: 3.4175, mass: 2.2e14},
            {name: "Wild2", officialName: "81P/Wild", orbitalPeriod: 6.41, radius: 1.5534, mass: 2.3e13},
            {name: "Comet Hyakutake", officialName: "C/1996 B2", orbitalPeriod: 17000, radius: 0.77671, mass: 8.8e12}
          ];
      
          const result = await coll.insertMany(docs);
      
          // display the results of your operation
          console.log(result.insertedIds);
      
        } finally {
          // Ensures that the client will close when you finish/error
          await client.close();
        }
      }
      run().catch(console.dir);
       example :
       output: to update data in mongoDB
       message : 
       const { MongoClient } = require("mongodb");
      
      // Replace the uri string with your MongoDB deployment's connection string.
      const uri =
        "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";
      
      const client = new MongoClient(uri);
      
      async function run() {
        try {
          await client.connect();
          // database and collection code goes here
          const db = client.db("sample_guides");
          const coll = db.collection("comets");
      
          // update code goes here
          const filter = {};
          const updateDoc = {
            $mul: {
              radius: 1.60934,
            },
          };
      
          const result = await coll.updateMany(filter, updateDoc);
      
          // display the results of your operation
          console.log("Number of documents updated: " + result.modifiedCount);
        } finally {
          // Ensures that the client will close when you finish/error
          await client.close();
        }
      }
      run().catch(console.dir);
          example :
          output: to delete data from mongodb
          message :
          const { MongoClient } = require("mongodb");
      
      // Replace the uri string with your MongoDB deployment's connection string.
      const uri =
        "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";
      
      const client = new MongoClient(uri);
      
      async function run() {
        try {
          await client.connect();
          // database and collection code goes here
          const db = client.db("sample_guides");
          const coll = db.collection("comets");
      
          // delete code goes here
          const doc = {
            orbitalPeriod: {
              $gt: 5,
              $lt: 85
            }
          };
      
          const result = await coll.deleteMany(doc);
      
          // amount deleted code goes here
          console.log("Number of documents deleted: " + result.deletedCount);
      
        } finally {
          // Ensures that the client will close when you finish/error
          await client.close();
        }
      }
      run().catch(console.dir);
          example : 
          output :  update data in mongodb in python
          message : from pymongo import MongoClient
      
      # Replace the uri string with your MongoDB deployment's connection string.
      uri = "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority"
      
      client = MongoClient(uri)
      
      # database and collection code goes here
      db = client.sample_guides
      coll = db.comets
      
      # update code goes here
      doc = {"$mul": {"radius": 1.60934}}
      result = coll.update_many({}, doc)
      
      # display the results of your operation
      print("Number of documents updated: ", result.modified_count)
      
      # Close the connection to MongoDB when you're done.
      client.close()
      
      Now, please generate ${language} code for the following query:
      ${query}
          `;
      
          const res = await model.invoke(prompt);
          return res.content;
        } catch (err) {
          console.error(err);
          return "An error occurred while processing your request.";
        }
      } 
      //////////////////////////////////////

      const copyToClipboard = () => {
        navigator.clipboard.writeText(content).then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 4000); // Reset after 2 seconds
        });
      };

      
      const handleClick = async (event) => {
        event.preventDefault();
        
        if (!database || !collection || !query || !selectedLanguage) {
          alert("Please fill in all fields and select a language.");
          return;
        }
        
        setIsGenerating(true);
        setContent('');
        
        try {
          const generatedText = await fetchBotReply(database, collection, query, selectedLanguage);
          setContent(generatedText);
          
          // Save the query and generated code to MongoDB
          await saveToMongoDB(query, generatedText, selectedLanguage);
        } catch (error) {
          console.error("Error generating code:", error);
          setContent("An error occurred while generating the code.");
        } finally {
          setIsGenerating(false);
        }
      };

    return(
        <>
            <div>

            <Header />
            <br />
            <br />
                <div className="boxy">
                    <div className="input">
                        <h4>Please describe your DB and collections </h4>
                        <br />
                        <Form.Label>DataBase Name</Form.Label>
                        <Form.Control id="db" onChange={(e) => setDataBase(e.target.value)} placeholder="Enter DataBase name" />
                        <br />
                        <Form.Label>Collection Name</Form.Label>
                        <Form.Control id="coll" onChange={(e) => setCollection(e.target.value)} placeholder="Enter Collection name" />
                        <br />
                        <h4>What would you like your query to do?</h4>
                        <br />
                        <Form.Label>Query instructions</Form.Label>
                        <Form.Control as="textarea" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Add query details , Be as specific as possible"  id="query" rows={3} />
                        <br />
                        <Form.Label>choose your preffered language</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="JavaScript"
                                name="group1"
                                type="radio"
                                id="inline-radio-1"
                                checked={selectedLanguage === 'javascript'}
                                onChange={() => setSelectedLanguage('javascript')}
                                />
                                <Form.Check
                                inline
                                label="Python"
                                name="group1"
                                type="radio"
                                id="inline-radio-2"
                                checked={selectedLanguage === 'python'}
                                onChange={() => setSelectedLanguage('python')}
                                />
                            </div>
                        ))}
                        <button 
                            style={{borderRadius: 120, fontFamily: "manrope", width: 100, height: 40}} 
                            id="submit" 
                            onClick={handleClick}
                            disabled={!database || !collection || !query || !selectedLanguage}
                            >
                            Submit
                            </button>
                    </div>
                    <div className="vertical-hr"/>
                    <div className="output">
                    {isGenerating ? (
                        <div className="spinner-container">
                        <Spinner animation="border" style={{ width: 50, height: 50 }} />
                        </div>
                    ) : content ? (
                        <>
                        <div className="code-header">
                            <span style={{ fontFamily: "manrope" }}>Language: {selectedLanguage}</span>
                            <button 
                            onClick={copyToClipboard} 
                            style={{ 
                                fontFamily: "manrope", 
                                color: "black", 
                                backgroundColor: "#01F466", 
                                borderRadius: 40,
                                padding: '5px 15px',
                                border: 'none',
                                cursor: 'pointer'
                            }} 
                            className="copy-button"
                            >
                            {isCopied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <Highlight className={selectedLanguage}>
                            {content}
                        </Highlight>
                        </>
                    ) : null}
                    </div>
                </div>
            </div>
            

        </>
    )
}
export default QuickQuery;