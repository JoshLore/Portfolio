import React from "react";
import "../styles/About.css";
import data from "../data.json";
import picture from "../images/profile.png";

const About = () => {
  const about = data.about;

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
          <h3 className="name">{about.name}</h3>
          <h2 className="subtitle">
            Education
            <hr className="title-line" />
          </h2>
          <p>{about.education.school}</p>
          <p>{about.education.degree}</p>
          <p>{about.education.attended}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
