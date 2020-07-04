import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";

function App() {
  return (
    <>
      <Navbar />
      <Showcase />

      <h2 style={{ color: "white" }} id="about">
        Temp About
      </h2>
      <h2 style={{ color: "white" }} id="projects">
        Temp Projects
      </h2>
      <h2 style={{ color: "white" }} id="contact">
        Temp Contact
      </h2>
    </>
  );
}

export default App;
