import React from "react";
import About from "../About/About";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="content-divider"></div>
            <Navbar></Navbar>
            <div className="content-divider"></div>
            <About></About>
        </div>
    );
};

export default Home;
