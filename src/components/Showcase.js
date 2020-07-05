import React from "react";
import "../styles/Showcase.css";
import Video from "../video.mp4";

const Showcase = () => {
  return (
    <section id="home" className="showcase">
      <div className="video-container">
        <video src={Video} autoPlay muted loop></video>
      </div>
      <div className="content">
        <h1>
          Joshua <span className="alias">"Lore"</span> Kelley
        </h1>
        <h3>Full-Stack Developer</h3>
        <a href="#about" className="btn">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Showcase;
