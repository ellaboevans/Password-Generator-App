import styled from "styled-components";
import {
  BREAKPOINTS,
  COLOR_GREEN,
  COLOR_VERY_DARK_GREY,
  COLOR_WHITE,
} from "../utils/constants";
import { CheckBoxProps } from "../types/types";

function CheckBox({ text, id, setter, checked }: CheckBoxProps) {
  return (
    <Container>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => {
          setter(e.target.checked);
        }}
      />
      <label htmlFor={id}>{text}</label>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  & label {
    cursor: pointer;
    display: flex;
    font-family: "JetBrains Mono", monospace;
    color: ${COLOR_WHITE};
    font-weight: bold;
    font-size: 18px;
    &:hover::before {
      border: 0.3rem solid ${COLOR_GREEN};
    }

    &::before {
      content: "";
      width: 20px;
      height: 20px;
      margin: 0 1rem 1.5rem 0;
      border: 0.2rem solid ${COLOR_WHITE};

      @media (max-width: ${BREAKPOINTS.MOBILE}) {
        margin: 0 0.5rem 1rem 0;
      }
    }
  }
  & input[type="checkbox"] {
    cursor: pointer;
    opacity: 0;
    position: absolute;

    &:hover + label::before {
      border: 0.2rem solid ${COLOR_GREEN};
    }

    &:checked + label::before {
      content: "✔";
      background-color: ${COLOR_GREEN};
      border: 0.3rem solid ${COLOR_GREEN};
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${COLOR_VERY_DARK_GREY};
    }
  }
`;

export default CheckBox;
