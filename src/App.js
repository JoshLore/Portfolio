import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Showcase />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
