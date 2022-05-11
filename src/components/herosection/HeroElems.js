import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 900px;
  position: relative;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 0.2)),
        to(rgba(0, 0, 0, 0.2))
      ),
      -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(transparent));
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background-size: auto;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff59d;
  border-right: solid 3px rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  overflow: hidden;
  font-size: 48px;
  text-align: center;
  text-shadow: 0 0 10px #fff59d;

  animation: animated-text 2s steps(12, end) 1s 1 normal both,
    animated-cursor 600ms steps(12, end) infinite;
  @keyframes animated-text {
    from {
      width: 0;
    }
    to {
      width: 320px;
    }
  }

  @keyframes animated-cursor {
    from {
      border-right-color: rgba(255, 255, 255, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 10px;
  color: #fff;
  font-size: 100px;
  text-align: center;
  max-width: 600px;
  padding: 70px;
  @media screen and (max-width: 768px) {
    font-size: 60px;
    padding: 0;
    margin-top: 0;
    transition: all 0.4s ease-in-out;
  }
  @media screen and (max-width: 480px) {
    font-size: 50px;
    padding: 0;
    margin-top: 0;
    transition: all 0.4s ease-in-out;
  }
  &:hover {
    color: #fff59d;
    transform: scale(1.2);
    transition: 0.2s ease-in-out;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeroBtnWrapper = styled.div`
  color: #fff59d
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
