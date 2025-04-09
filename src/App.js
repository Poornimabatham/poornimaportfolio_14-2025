import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Education from "./components/Education";
import Experience from "./components/Experience";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Education />
      <Experience />
    </>
  );
}

export default App;
