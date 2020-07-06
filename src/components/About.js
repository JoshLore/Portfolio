import React from "react";
import "../styles/About.css";
import data from "../data.json";
import picture from "../images/profile.png";
import Skill from "./Skill";

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

  const workExperience = () => {
    const jobs = data.about.workExperience;
    const experience = [];

    for (let i = 0; i < jobs.length; i++) {
      const render = (
        <div className="job" key={jobs[i].company}>
          <div className="jobTop">
            <h2 className="jobName">
              {jobs[i].company} <hr />
            </h2>
            <p className="time">{jobs[i].time}</p>
          </div>
          <p className="jobTitle">{jobs[i].title}</p>
          <ul className="jobDuties">
            <li className="duty">{jobs[i].duties[0]}</li>
            <li className="duty">{jobs[i].duties[1]}</li>
            <li className="duty">{jobs[i].duties[2]}</li>
          </ul>
        </div>
      );
      experience.push(render);
    }
    console.log(experience);
    return experience;
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

      <div className="experiences">{workExperience()}</div>
      {/* <ul className="skills">{getSkills()}</ul> */}
    </div>
  );
};

export default About;
