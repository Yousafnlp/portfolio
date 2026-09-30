import React from "react";
import Home from "../sections/Home";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import SparkAI from "../sections/SparkAI";
import Contact from "../sections/Contact";

const CentralSection = () => {
  return (
    <div className="px-5 sm:px-8">
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <SparkAI />
      <Contact />
    </div>
  );
};

export default CentralSection;
