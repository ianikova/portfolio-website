import React, { useState } from "react";
import About from "../components/about";
import Contact from "../components/contactSection";
import HeroSection from "../components/herosection";
import NavBar from "../components/navbar/index";
import Portfolio from "../components/portfolioSection";
import Sidebar from "../components/sidebar";
import SkillSection from "../components/skillsSection";
import { aboutObjOne } from "../components/about/data";
import { portObjOne } from "../components/portfolioSection/Data";
import { skillObjOne } from "../components/skillsSection/Data";
import { contObjOne } from "../components/contactSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <About {...aboutObjOne} />
      <Portfolio {...portObjOne} />
      <SkillSection {...skillObjOne} />
      <Contact {...contObjOne} />
    </div>
  );
};

export default Home;
