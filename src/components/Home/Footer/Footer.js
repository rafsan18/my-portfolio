import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { gitHub, linkedIn } from "../../../data/personalData";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="section-center">
                <div className=" text-center">
                    <a href={gitHub} className="social-icon">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>

                    <a href={linkedIn} className="social-icon">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                <p className="text-center  text-brand ">
                    <small>
                        &copy; Created by AL-Rafsan Amin (
                        {new Date().getFullYear()})
                    </small>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
