import React from "react";
import "../styles/About.css";
import data from "../data.json";
import picture from "../images/profile.png";
import Skill from "./Skill";
import WorkExperience from "./WorkExperience";

const About = () => {
  const about = data.about;

  const getSkills = () => {
    const keys = about.skills;
    const result = [];
    for (const [skill, iconClass] of Object.entries(keys)) {
      result.push(<Skill skill={skill} icon={iconClass} key={skill} />);
    }
    return result;
  };

  return (
    <div id="about">
      <div className="title">
        <h2>
          About
          <hr className="title-line" />
        </h2>
      </div>
      <div className="about-card">
        <img className="profile" src={picture} alt={about.name} />
        <div className="subsection">
          <h2 className="name">{about.name}</h2>
          <h2 className="subtitle">
            Education
            <hr className="title-line" />
          </h2>
          <p>{about.education.school}</p>
          <p>{about.education.degree}</p>
          <p>{about.education.attended}</p>
        </div>
      </div>
      <div className="desc">
        <h2 className="subtitle">About Me</h2>
        <p className="description">
          Hello, I'm <span className="alias">Josh</span>, an aspiring full-stack
          developer. Most of my experience is in JavaScript, React, Node.js, and
          other JavaScript libraries. I've also worked on projects with Python,
          Ruby on Rails, C#, and many more. I enjoy working with others as
          necessary to develop solutions, and I can effectively communicate my
          ideas to teammates I work with. Please contact me if you'd like to
          learn more.
        </p>
      </div>

      <div className="experiences">
        <WorkExperience jobs={data.about.workExperience} />
      </div>
      <div className="skills-container">
        <h2 className="subtitle">Skills</h2>
        <ul className="skills">{getSkills()}</ul>
      </div>
    </div>
  );
};

export default About;
