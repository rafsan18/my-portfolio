import React, { useState } from "react";
import { skills } from "../../../data/skillSet";
import self from "../../../images/self.jpg";
import "./About.css";
import Skill from "./Skill";

const About = () => {
    const [comfortableIn, setComfortableIn] = useState(skills.comfortableIn);
    const [familiarWith, setFamiliarWith] = useState(skills.familiarWith);
    const [tools, setTools] = useState(skills.tools);

    return (
        <div className="about-container py-5">
            <h1 className="text-center  text-brand">About</h1>
            <div className="row  ">
                <div className="col-md-5">
                    <div className="d-flex flex-column align-items-center justify-content-center  intro">
                        <img
                            className="self-img img-fluid "
                            src={self}
                            alt=""
                        />
                        <p className="w-75 text-center">
                            An enthusiastic and highly motivated self-learned
                            web developer. Always ready to take challenges.
                        </p>
                        <p className="w-75 text-center">
                            I am good at logical reasoning. I like to solve
                            problems and enjoy the feeling of getting successful
                            solution.
                        </p>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className=" ">
                        <h3 className="text-center mb-4">Skills</h3>

                        <div className="comfortable-in">
                            <h4 className="text-center">Comfortable In </h4>
                            <div className="d-flex justify-content-center flex-wrap">
                                {comfortableIn.map((skill) => (
                                    <Skill skill={skill} key={skill.id} />
                                ))}
                            </div>
                        </div>
                        <div className="familiar-with">
                            <h4 className="text-center">Familiar With </h4>
                            <div className="d-flex justify-content-center flex-wrap">
                                {familiarWith.map((skill) => (
                                    <Skill skill={skill} key={skill.id} />
                                ))}
                            </div>
                        </div>
                        <div className="tools">
                            <h4 className="text-center">Tools </h4>
                            <div className="d-flex justify-content-center flex-wrap">
                                {tools.map((skill) => (
                                    <Skill skill={skill} key={skill.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
