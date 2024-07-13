import React from "react";
import ComponentWrapper from "../../Components/elements/ComponentWrapper";

const AboutMe = React.lazy(() => import("./components/AboutMe"));
const Experiences = React.lazy(() => import("./components/Experiences"));
const Skills = React.lazy(() => import("./components/Skills"));

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
