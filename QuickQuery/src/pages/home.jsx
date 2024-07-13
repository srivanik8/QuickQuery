import React from "react";
import Header from "../components/header";

function Home(){
    return(
        <>
        <div className="box">
            <Header />
            <br />
            <br />
            <br />
            <br />
            <h1 className="main">
                <span className="mid-title"> FunLearn </span>
                <span className="subtitle"> Ditch your boring textbooks & learn with FunLearn</span>
                <span><button className="btn">Get Started

                </button></span>
            </h1>          
        </div>
        </>
    )
}
export default Home;