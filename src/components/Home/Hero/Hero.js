import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { gitHub, linkedIn, resumeLink } from "../../../data/personalData";
import "./Hero.css";

const Hero = () => {
    return (
        <header className="hero-container d-flex flex-column justify-content-center align-items-center">
            <h3 className="hero-subtitle">Hello, I am </h3>
            <h1 className="hero-title">AL-Rafsan Amin</h1>
            <h3 className="hero-subtitle">Web Developer</h3>
            <div className="social-icon-wrapper my-3">
                <a href={gitHub}>
                    <FontAwesomeIcon icon={faGithub} className="social-icon" />
                </a>
                <a href={linkedIn}>
                    <FontAwesomeIcon
                        className="social-icon"
                        icon={faLinkedin}
                    />
                </a>
            </div>
            <a
                className="hero-btn btn btn-outline-light w-25"
                href={resumeLink}
            >
                Resume
            </a>
        </header>
    );
};

export default Hero;
