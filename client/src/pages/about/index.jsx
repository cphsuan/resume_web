import React from "react";
import ComponentWrapper from "../../components/ComponentWrapper";
import AboutMe from "./components/AboutMe";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";

function About() {
  return (
    <ComponentWrapper>
      <AboutMe />
      <Experiences />
      <Skills />
    </ComponentWrapper>
  );
}

export default About;
