import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Education />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
