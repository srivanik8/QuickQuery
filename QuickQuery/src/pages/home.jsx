import React from "react";
import Header from "../components/header";
import Container from 'react-bootstrap/Container';
import { ArrowRight } from 'lucide-react';
import Buttonbox from "../components/button";


function Home(){
    return(
        <>
        <div>

            <Header />
            <br />
            <Container style={{backgroundColor: "#011F2B" , borderRadius: 100}}>
                <div className="box" style={{ color: "white"}}>
                    <div className="left">
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3>Craft Perfect</h3>
                    <h3>MongoDB Queries</h3>
                    <h3>in Seconds!</h3>
                    <h4 style={{  fontSize: 15}}>QuickQuery is a versatile tool that effortlessly </h4>
                    <h4 style={{  fontSize: 15}}>Generates and Optimizes MongoDB Queries. Simplifying</h4>
                    <h4 style={{  fontSize: 15}}>your database management with our intuitive tool</h4>
                    <h4 style={{  fontSize: 15}}>designed for speed and accuracy.</h4>
                    <br />
                    <Buttonbox>Get Started</Buttonbox>
                    <br />
                    <br />
                    <br />
                    </div>
                    <div className="right">
                <img src="https://images.contentstack.io/v3/assets/blt7151619cb9560896/blt39753298aa77f800/662f65bcac4b000ef2c450dd/Technical_SOFTWARE_Sync(2)_Spot_BS_Mist.png" alt="image" />
                </div>
                </div>
            </Container>
        </div>
        </>
    )
}
export default Home;