import React from "react";
import data from "../data.json";

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
      <div className="projects-container"></div>
    </div>
  );
};

export default Projects;
