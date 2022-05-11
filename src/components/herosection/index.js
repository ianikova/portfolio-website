import React, { useState } from "react";
import { Button } from "../ButtonElems";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Video from "../../videos/video1.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  LinkContainer,
} from "./HeroElems";

function openGithub() {
  window.open("https://github.com/ianikova");
}

function openLinkedin() {
  window.open("https://www.linkedin.com/in/anna-ianikova/");
}

function openInsta() {
  window.open("https://www.instagram.com/yatwins90/");
}

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          playsInline
          autoPlay
          loop
          muted
          src={Video}
          type="video1/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Anna Ianikova</HeroH1>
        <LinkContainer>
          <HeroP>
            <FaGithub onClick={openGithub} />
          </HeroP>
          <HeroP>
            <FaLinkedin onClick={openLinkedin} />
          </HeroP>
          <HeroP>
            <FaInstagram onClick={openInsta} />
          </HeroP>
        </LinkContainer>
        <HeroBtnWrapper>
          <Button
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Contact {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
