import React from "react";
import {
  PortContainer,
  PortH1,
  PortCard,
  PortH2,
  PortP,
  ImgWrap,
  Img,
  PortLink,
  PortWrapper,
  LinkWrap,
} from "./PortfolioElems";
import project1 from "../../assets/project1.gif";
import project2 from "../../assets/project2.gif";
import project3 from "../../assets/project3.gif";

const Portfolio = ({ id }) => {
  function gitPortfolio() {
    window.open("https://github.com/ianikova/portfolio-website");
  }
  function makePortfolio() {
    window.open("https://ianikova.netlify.app/");
  }

  function gitDictionaryApp() {
    window.open("https://github.com/ianikova/dictionary-app");
  }
  function makeDictionaryApp() {
    window.open("https://wondrous-salamander-e40509.netlify.app/");
  }

  function gitWeatherApp() {
    window.open("https://github.com/ianikova/weather-react-app");
  }
  function makeWeatherApp() {
    window.open("https://wizardly-stonebraker-ac8f03.netlify.app/");
  }

  return (
    <PortContainer id={id}>
      <PortH1>Portfolio</PortH1>
      <PortWrapper>
        <PortCard>
          <ImgWrap>
            <Img src={project1} />
          </ImgWrap>
          <PortH2>Personal Website</PortH2>
          <PortP>
            My personal website. My main objective was to create a portfolio
            using React framework.
          </PortP>
          <LinkWrap>
            <PortLink onClick={gitPortfolio}>Code</PortLink>
            <PortLink onClick={makePortfolio}>Site</PortLink>
          </LinkWrap>
        </PortCard>
        <PortCard>
          <ImgWrap>
            <Img src={project2} />
          </ImgWrap>
          <PortH2>Weather App</PortH2>
          <PortP>
            Weather application (first coding project) built with React and
            open-source API.
          </PortP>
          <LinkWrap>
            <PortLink onClick={gitWeatherApp}>Code</PortLink>
            <PortLink onClick={makeWeatherApp}>Site</PortLink>
          </LinkWrap>
        </PortCard>
        <PortCard>
          <ImgWrap>
            <Img src={project3} />
          </ImgWrap>
          <PortH2>Dictionary App</PortH2>
          <PortP>
            This is the final work created while studying at the coding bootcamp
            "SheCodes".
          </PortP>
          <LinkWrap>
            <PortLink onClick={gitDictionaryApp}>Code</PortLink>
            <PortLink onClick={makeDictionaryApp}>Site</PortLink>
          </LinkWrap>
        </PortCard>
      </PortWrapper>
    </PortContainer>
  );
};

export default Portfolio;
