import React from "react";

const Skill = (props) => {
  return (
    <li className="skill">
      <p>{props.skill} </p> <i className={props.icon}></i>
    </li>
  );
};

export default Skill;
