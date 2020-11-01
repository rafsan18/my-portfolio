import React from "react";
import { resumeLink } from "../../../data/personalData";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href={resumeLink} target="_blank">
                AL-Rafsan Amin
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">
                            Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#blogs">
                            Blogs
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">
                            Contact
                        </a>
                    </li>
                    <a
                        className="btn btn-outline-light w-25 resume-btn"
                        href={resumeLink}
                        target="_blank"
                    >
                        Resume
                    </a>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
