import React, { useState } from "react";
import {
  AboutContainer,
  Column1,
  TextWrapper,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Button,
  AboutH2,
} from "./AboutElems";
import profile from "../../assets/profile-pic.jpg";
import Resume from "../../assets/AnnaIanikovaResume.pdf";

const About = ({ id, headline, description, img, alt }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  function onResumeClick() {
    window.open(Resume);
  }

  return (
    <AboutContainer id={id}>
      <Column1>
        <TextWrapper>
          <Heading>{headline} </Heading>
          <AboutH2>Austin, TX</AboutH2>
          <Subtitle> {description} </Subtitle>
          <HeroBtnWrapper>
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              onClick={onResumeClick}
            >
              Download Resume {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </TextWrapper>
      </Column1>
      <Column2>
        <ImgWrap>
          <Img src={profile} alt={alt} />
        </ImgWrap>
      </Column2>
    </AboutContainer>
  );
};

export default About;
