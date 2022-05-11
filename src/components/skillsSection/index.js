import React from "react";
import {
  SkillContainer,
  SkillH1,
  SkillH2,
  SkillH3,
  SkillWrapper,
  SkillCard,
} from "./SkillsElems";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiGithub,
  SiPython,
  SiReact,
  SiPostgresql,
  SiNpm,
  SiFirebase,
  SiMongodb,
  SiRedux,
  SiNodedotjs,
} from "react-icons/si";

const SkillSection = ({ id }) => {
  return (
    <SkillContainer id={id}>
      <SkillH1>Skills</SkillH1>
      <SkillWrapper>
        <SkillCard>
          <SkillH2>
            {" "}
            <SiHtml5 style={{ color: "#ff6e40" }} />{" "}
          </SkillH2>
          <SkillH3 style={{ color: "#ff6e40" }}>HTML5</SkillH3>
        </SkillCard>
        <SkillCard>
          <SkillH2>
            {" "}
            <SiCss3 style={{ color: "#1e88e5" }} />{" "}
          </SkillH2>
          <SkillH3 style={{ color: "#1e88e5" }}>CSS3</SkillH3>
        </SkillCard>
        <SkillCard>
          <SkillH2>
            {" "}
            <SiJavascript style={{ color: "#ffeb3b" }} />{" "}
          </SkillH2>
          <SkillH3 style={{ color: "#ffeb3b" }}>JavaScript</SkillH3>
        </SkillCard>
        <SkillCard>
          <SkillH2>
            {" "}
            <SiReact style={{ color: "#40c4ff" }} />{" "}
          </SkillH2>
          <SkillH3 style={{ color: "#40c4ff" }}>React</SkillH3>
        </SkillCard>
        <SkillCard>
          <SkillH2>
            {" "}
            <SiRedux style={{ color: "#b388ff" }} />{" "}
          </SkillH2>
          <SkillH3 style={{ color: "#b388ff" }}>Redux</SkillH3>
        </SkillCard>
        <SkillCard>
          <SkillH2>
            {" "}
            <SiGithub style={{ color: "#8e24aa" }} />{" "}
          </SkillH2>
          <SkillH3 style={{ color: "#8e24aa" }}>GitHub</SkillH3>
        </SkillCard>
      </SkillWrapper>
    </SkillContainer>
  );
};

export default SkillSection;
