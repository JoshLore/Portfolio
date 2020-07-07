import React from "react";

// Displays all work experience from data.json
// Only up to 3 job duties allowed**
const WorkExperience = (props) => {
  const jobs = props.jobs;
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

export default WorkExperience;
