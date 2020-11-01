import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="content-divider"></div>
            <Navbar></Navbar>
            <div className="content-divider"></div>
            <About></About>
            <div className="content-divider"></div>
            <Projects></Projects>
            <div className="content-divider"></div>
            <Contact></Contact>
        </div>
    );
};

export default Home;
