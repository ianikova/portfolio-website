import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: #87e1f5;
  white-space: nowrap;
  padding: 14px 48px;
  color: #010606;
  font-size: 20px;
  outline: none;
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
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff59d" : "#87e1f5")};
  }
`;
