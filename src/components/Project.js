import React from "react";

const Project = (props) => {
  // Gets the image from the name + .png, so name your images accordingly.
  const img = require(`../images/${props.project.name}.png`);

  const getTech = () => {
    const techs = props.project.skills;
    const result = [];
    for (let i = 0; i < techs.length; i++) {
      const tech = (
        <li className="tech" key={`${i} ${techs[i]}`}>
          {techs[i]}
        </li>
      );
      result.push(tech);
    }
    return result;
  };

  return (
    <div className="project">
      <img src={img} alt={props.project.name} className="project-img" />
      <div className="project-about">
        <h2 className="project-name">
          {props.project.name}
          <hr />
        </h2>
        <p className="project-desc">{props.project.description}</p>
        <ul className="project-techs">{getTech()}</ul>
      </div>
      <div className="project-links">
        <a className="project-link" href={props.project.url.GitHub}>
          <i className="fab fa-github"></i> GitHub
        </a>
        <a className="project-link" href={props.project.url.Website}>
          <i className="fas fa-external-link-alt"></i> Website
        </a>
      </div>
    </div>
  );
};

export default Project;
