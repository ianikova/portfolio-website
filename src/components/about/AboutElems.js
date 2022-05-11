import styled from "styled-components";
import { MdCloudDownload, MdFileDownload } from "react-icons/md";

export const AboutContainer = styled.div`
  height: 1200px;
  color: #fff;
  background: ${({ scrollNav }) => (scrollNav ? "transparent" : "#030029")};
  clip-path: polygon(100% 0, 100% 50%, 100% 91%, 0 100%, 0 49%, 0 0);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 400px) {
    padding: 0;
    height: 1100px;
  }
  @media screen and (max-width: 370px) {
    padding: 0;
    height: 1150px;
  }
`;

export const AboutRow = styled.div`
  display: flex;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 5px;
`;

export const Heading = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const AboutH2 = styled.h2`
  color: #fff;
  font-size: 20px;
  margin-bottom: 50px;
`;

export const Subtitle = styled.p`
  max-width: 700px;
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 24px;
  color: "#fff";
  @media screen and (max-width: 400px) {
    padding: 0;
    height: 400px;
    font-size: 15px;
  }
  @media screen and (max-width: 370px) {
    padding: 0;
    height: 500px;
    font-size: 15px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 500px;
`;

export const Img = styled.img`
  width: 100%;
  margin-top: 0;
  padding-right: 0;
  clip-path: circle(50%);
`;

export const Button = styled.button`
  border-radius: 50px;
  background: #87e1f5;
  white-space: nowrap;
  padding: 14px 48px;
  color: #030029;
  font-size: 16px;
  outline: #030029;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 700px) {
    font-size: 16px;
    padding: 12px 30px;
  }

  &:hover {
    transition: all 0.4s ease-in-out;
    background: #fff59d;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdCloudDownload)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdFileDownload)`
  margin-left: 8px;
  font-size: 20px;
`;
