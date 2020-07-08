import React from "react";

// Displays all work experience from data.json
const WorkExperience = (props) => {
  const jobs = props.jobs;
  const experience = [];

  // Display all duties in each job experience
  const duties = (duties) => {
    const dutiesArray = [];
    for (let j = 0; j < duties.length; j++) {
      const duty = (
        <li className="duty" key={j}>
          {duties[j]}
        </li>
      );
      dutiesArray.push(duty);
    }
    return dutiesArray;
  };

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
        <ul className="jobDuties">{duties(jobs[i].duties)}</ul>
      </div>
    );
    experience.push(render);
  }
  return experience;
};

export default WorkExperience;
