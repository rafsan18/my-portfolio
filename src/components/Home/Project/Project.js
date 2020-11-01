import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Project.css";

const Project = ({ project }) => {
    const { title, img, details, technology, github, live } = project;

    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="h-100 card text-white bg-dark">
                <img src={img} className="card-img-top project-img" alt="..." />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text text-brand">{details}</p>
                    </div>
                    <div>
                        <h6 className="card-title mt-2">Technology Used</h6>
                        {technology.map((tech) => (
                            <li className="tech">{tech.item}</li>
                        ))}
                    </div>
                    <div>
                        <a href={github}>
                            <FontAwesomeIcon
                                className="link-icon"
                                icon={faGithub}
                            />
                        </a>
                        <a href={live}>
                            <FontAwesomeIcon
                                className="link-icon"
                                icon={faExternalLinkAlt}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
