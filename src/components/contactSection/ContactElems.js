import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const ContContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 1000px;
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

export const ContBg = styled.div`
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

export const ContContent = styled.div`
  z-index: 3;
  max-width: 80vw;
  position: absolute;
  padding: 8px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContH1 = styled.h1`
  color: #fff;
  white-space: nowrap;
  font-size: 24px;
  text-align: center;
`;

export const ContP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
  &:hover {
    color: #fff59d;
    transition: 0.2s ease-in-out;
  }
`;
export const ContBtnWrapper = styled.div`
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

export const FormLabel = styled.label`
  margin-bottom: 10px;
  font-size: 20px;
  color: #fff;
  text-align: left;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;
export const Form = styled.form`
  background: rgba(255, 255, 255, 0.25);
  max-width: 800px;
  height: 800px;
  width: 80vw;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 50px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 400px) {
    padding: 10px;
    height: 80%;
    width: 300px;
  }
`;

export const FormInput = styled.input`
  padding: 10px 16px;
  margin-bottom: 20px;
  border: none;
  border-radius: 4px;
`;

export const FormMessage = styled.textarea`
  height: 200px;
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #87e1f5;
  margin-top: 10px;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: #fff59d;
    transition: 0.2s ease-in-out;
  }
`;

export const SpanErr = styled.span`
  color: #ff0000;
  font-weight: bold;
  text-shadow: 0 0 10px #ff0000;
`;

export const ContWrap = styled.div`
  color: #fff;
  font-size: 20px;
`;

export const ContCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 0;
  color: #fff59d;
  font-size: 20px;
`;
