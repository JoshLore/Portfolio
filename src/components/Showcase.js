import React from "react";
import "../styles/Showcase.css";
import Video from "../video.mp4";
import data from "../data.json";

const Showcase = () => {
  return (
    <section id="home" className="showcase">
      <div className="video-container">
        <video src={Video} autoPlay muted loop></video>
      </div>
      <div className="content">
        <h1>
          {data.about.firstName}{" "}
          <span className="alias">"{data.about.alias}"</span>{" "}
          {data.about.lastName}
        </h1>
        <h3>{data.about.jobTitle}</h3>
        <a href="#about" className=" btn">
          <i className=" fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Showcase;
