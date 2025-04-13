import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <>
      <Navbar />
   
      <div id="about">
        {" "}
        <HeroSection />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="experience">
        {" "}
        <Experience />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        {" "}
        <Projects />
      </div>
    </>
  );
}

export default App;
