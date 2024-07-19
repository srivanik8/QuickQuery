import React from "react";
import Header from "../components/header";  
import Container from 'react-bootstrap/Container';
import { useState  , useEffect} from "react";
import Highlight from 'react-highlight';
import { Grid, Repeat } from "lucide-react";
import { RotateCcw } from 'lucide-react';



function Querysnippet(){
    const [savedQueries, setSavedQueries] = useState([]);

    async function fetchQueries() {
        try {
          const response = await fetch('/api/get-queries');
          if (!response.ok) {
            throw new Error('Failed to fetch queries');
          }
          const queries = await response.json();
          return queries;
        } catch (error) {
          console.error('Error fetching queries:', error);
          return [];
        }
      }
    
      const loadQueries = async () => {
        const queries = await fetchQueries();
        setSavedQueries(queries);
      };
      useEffect(() => {
        loadQueries();
      }, []);

    return(
        <>
            <div>
            <Header />
            <br />
            <br />
            <div style={{display: "flex" , justifyContent: "center" , alignItems: "center" , gap: 20}}>
            <h3 style={{textAlign: "center" , fontFamily: "sora" , color: "#1F9D62"}}>Saved Queries</h3>
            <button onClick={loadQueries} style={{width: 50 ,  height: 40, border: "none" , borderRadius: 700}}><RotateCcw /></button>
            </div>
            <br />
                <div className="saved-queries">
                    {savedQueries.map((item, index) => (
                        <div key={index} className="query-item">
                        <h4>Query: {item.query}</h4>
                        <Highlight className={item.language}>
                            {item.generatedCode}
                        </Highlight>
                        </div>
                    ))}
                    </div>
            </div>
        </>
    )
}
export default Querysnippet;