import styled from "styled-components";

export const PortContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: "#030029";
  background: #616161;
  overflow: hidden;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    height: 900px;
  }
  @media screen and (max-width: 480px) {
    height: 800px;
  }
`;

export const PortWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 30px;
  padding: 0 50px;
  overflow: scroll;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

export const PortCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  max-height: 300vh;
  max-width: 300vw;
  padding: 5px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  z-index: 0;
  @media screen and (max-width: 700px) {
    max-width: 360px;
  }
  @media screen and (max-width: 480px) {
    max-width: 300px;
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const PortIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const PortH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 10px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PortH2 = styled.h2`
  color: "#030029";
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const PortP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  padding: 10px;
`;

export const Img = styled.img`
  width: 80%;
  box-shadow: 0 0 10px #212121;
`;

export const LinkWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 80px;
`;

export const PortLink = styled.h3`
  color: #1976d2;
  font-size: 1rem;
  &:hover {
    color: #fff59d;
    transition: 0.2s ease-in-out;
  }
`;
