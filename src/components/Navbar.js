import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import data from "../data.json";

const Navbar = () => {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [projects, setProject] = useState(false);
  const [contact, setContact] = useState(false);
  const [checkWindowSize, setCheckWindowSize] = useState(false);

  window.addEventListener("load", () => {
    setCheckWindowSize(window.innerWidth > 960);
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCheckWindowSize(window.innerWidth > 960);
    });

    document.addEventListener("scroll", () => {
      // Get Home Element
      const homeElement = document
        .getElementById("home")
        .getBoundingClientRect();

      // Get About Element
      const aboutElement = document
        .getElementById("about")
        .getBoundingClientRect();

      // Get Projects Element
      const projectsElement = document
        .getElementById("projects")
        .getBoundingClientRect();

      // Get Contact Element
      const contactElement = document
        .getElementById("contact")
        .getBoundingClientRect();

      setHome(homeElement.bottom > 0);

      setAbout(aboutElement.top <= 0 && aboutElement.bottom > 0);
      setProject(projectsElement.top <= 0 && projectsElement.bottom > 0);
      setContact(contactElement.top <= 0 && contactElement.bottom > 0);
    });
  });

  const showLinks = () => {
    return (
      <div className="show-links">
        <div className={home ? "link active" : "link"}>
          <a href="# ">Home</a>
          <hr className="line" />
        </div>
        <div className={about ? "link active" : "link"}>
          <a href="#about">About</a>
          <hr className="line" />
        </div>
        <div className={projects ? "link active" : "link"}>
          <a href="#projects">Projects</a>
          <hr className="line" />
        </div>
        <div className={contact ? "link active" : "link"}>
          <a href="#contact">Contact</a>
          <hr className="line" />
        </div>
      </div>
    );
  };

  return (
    <nav className="navbar sticky">
      <a href="# ">
        <span className="alias">{data.about.alias}</span>
        {data.about.websiteSubname}
      </a>
      {checkWindowSize ? showLinks() : ""}
    </nav>
  );
};

export default Navbar;
