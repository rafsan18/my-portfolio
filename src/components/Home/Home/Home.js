import React from "react";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
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
            <Blogs></Blogs>
            <div className="content-divider"></div>
            <Contact></Contact>
            <div className="content-divider"></div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
