import React from "react";
import data from "../data.json";
import Project from "./Project";
import "../styles/Projects.css";

const getProjects = () => {
  const keys = data.projects;
  const result = [];
  for (let i = 0; i < keys.length; i++) {
    const proj = <Project project={keys[i]} key={keys[i].name} />;
    result.push(proj);
  }
  return result;
};

const Projects = () => {
  return (
    <div id="projects">
      <hr className="section-divider" />
      <div className="title">
        <h2>
          Projects
          <hr className="title-line" />
        </h2>
      </div>
      <div className="projects-container">{getProjects()}</div>
    </div>
  );
};

export default Projects;
