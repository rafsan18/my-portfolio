import React, { useState } from "react";
import projectsData from "../../../data/projectData";
import Project from "../Project/Project";
import "./Projects.css";

const Projects = () => {
    const [projects, setProjects] = useState(projectsData);

    return (
        <div className="bg-light projects-container py-5 ">
            <h1 className="text-center   mt-3 mb-5" id="projects">
                Projects
            </h1>
            <div className="row w-75 m-auto">
                {projects.map((project) => (
                    <Project project={project} key={project.id} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
