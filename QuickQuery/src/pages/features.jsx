import React from "react";
import Header from "../components/header";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { DatabaseZap } from 'lucide-react';
import { History } from 'lucide-react';
import { Handshake } from 'lucide-react';
import { FileCode } from 'lucide-react';
import { Github } from 'lucide-react';
import { Link } from "react-router-dom";


function Features(){
    return(
        <>
            <div>
            <Header />
            <br />
            <br />

            <Container style={{backgroundColor: "#011F2B" , borderRadius: 100}}>
                <div >
                    <br />
                    <br />
                    <h1 class="gradient-text">Unleash the Features!</h1>
                    <p style={{ color: "white" , width: "700px" , textAlign: "center" , marginLeft: 300 , fontFamily: "manrope" , color: "#ded6d6" , fontWeight: 600 , fontSize: 13}}>Streamline Your MongoDB Workflows with Effortless Query Generation and Assistance. Boost productivity and simplify database management with our powerful tool, designed to help you generate precise MongoDB queries in NO TIME!</p>
                    <div className="grid">
                    <Card border="light" style={{ width: '18rem'  , fontFamily: "manrope" , fontWeight: "700"}}>
                        <Card.Body>
                        <Link className="link" to="/quickquery"><Card.Title><DatabaseZap /> &nbsp;QuickQuery</Card.Title></Link>
                        <Card.Text>
                            Craft queries in seconds in your preferred coding language.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="light" style={{ width: '18rem' , fontFamily: "manrope" , fontWeight: "700" }}>
                        <Card.Body>
                        <Link className="link" to="/querysnippet"><Card.Title><History /> &nbsp;QuickSnippet</Card.Title></Link>
                        <Card.Text>
                            Safeguard your queries and revisit them anytime you want
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="light" style={{ width: '18rem' , fontFamily: "manrope" , fontWeight: "700" }}>
                        <Card.Body>
                        <Link className="link" to="/community"><Card.Title><Handshake /> &nbsp;Community</Card.Title></Link>
                        <Card.Text>
                            Join a global community of developers
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="light" style={{ width: '18rem' , fontFamily: "manrope" , fontWeight: "700" }}>
                        <Card.Body>
                        <Link className="link" to="https://www.mongodb.com/docs/"><Card.Title><FileCode /> &nbsp;Documentation</Card.Title></Link>
                        <Card.Text>
                            Dive deep into mongoDB documentation and explore a wide range of resources
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="light" style={{ width: '18rem' , fontFamily: "manrope" , fontWeight: "700" }}>
                        <Card.Body>
                        <Link className="link" to="https://github.com/srivanik8/QuickQuery"><Card.Title><Github /> &nbsp;Github</Card.Title></Link>
                        <Card.Text>
                            Get insights into the code of QuickQuery
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    

                    </div>
                    <br />
                    <br />

                    
                </div>
            </Container>
            <br />


            </div>

        </>
    )
}
export default Features;