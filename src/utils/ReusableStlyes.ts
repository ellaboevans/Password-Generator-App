import styled from "styled-components";
import {
  BREAKPOINTS,
  COLOR_DARK_GREY,
  COLOR_GREEN,
  COLOR_GREY,
  COLOR_WHITE,
  DEFAULT_PASSWORD,
} from "./constants";
import { ButtonProps, HeaderProps } from "../types/types";

export const Button = styled.button<ButtonProps>`
  padding: 13px 20px;
  border: none;
  cursor: pointer;
  font-family: "JetBrains Mono", monospace;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  display: flex;
  color: ${COLOR_DARK_GREY};
  gap: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR_GREEN};
  border: 0.1rem solid ${COLOR_GREEN};
  transition: all 0.3s;
  font-family: "JetBrains Mono", monospace;

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 18px;
    padding: 10px 15px;
  }

  &:hover {
    background-color: ${COLOR_DARK_GREY};
    color: ${COLOR_GREEN};
  }
  &:disabled {
    background-color: ${(props) => (props.disabled ? COLOR_GREY : COLOR_GREEN)};
    color: ${(props) => (props.disabled ? COLOR_DARK_GREY : COLOR_WHITE)};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    border: 0.1rem solid
      ${(props) => (props.disabled ? COLOR_GREY : COLOR_GREEN)};
  }
`;

// TYPOGRAPHY STYLES WITH JETBRAINS MONO FONT
export const Heading_Large = styled.h2<HeaderProps>`
  display: flex;
  font-size: 32px;
  flex: 1;
  font-weight: bold;
  font-family: "JetBrains Mono", monospace;
  color: ${(props) =>
    props.currentpassword.length === DEFAULT_PASSWORD.length ||
    props.currentpassword === DEFAULT_PASSWORD
      ? COLOR_GREY
      : COLOR_WHITE};
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 22px;
    padding: 0.3rem 0;
  }
`;

export const Heading_Medium = styled.h1`
  font-size: 24px;
  font-weight: bold;
  font-family: "JetBrains Mono", monospace;
`;

export const Body_Small = styled.p`
  font-size: 18px;
  font-family: "JetBrains Mono", monospace;
  font-weight: bold;
  color: ${COLOR_WHITE};
`;

export const Body_Medium = styled.p`
  font-size: 20px;
  font-family: "JetBrains Mono", monospace;
  font-weight: bold;
  color: ${COLOR_DARK_GREY};
`;

export const Body_Medium_2 = styled.p`
  font-size: 20px;
  font-family: "JetBrains Mono", monospace;
  font-weight: bold;
  color: ${COLOR_GREY};
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 18px;
  }
`;

export const SliderCounter = styled.p`
  font-size: 32px;
  font-family: "JetBrains Mono", monospace;
  font-weight: bold;
  color: ${COLOR_GREEN};

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 24px;
  }
`;
