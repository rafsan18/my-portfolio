import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="content-divider"></div>
            <Navbar></Navbar>
        </div>
    );
};

export default Home;
