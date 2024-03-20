import styled from "styled-components";
import {
  COLOR_GREEN,
  COLOR_VERY_DARK_GREY,
  COLOR_WHITE,
} from "../utils/constants";
import { CheckBoxProps } from "../types/types";

function CheckBox({ text, id, setter, checked }: CheckBoxProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

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
  gap: 8px;
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
      margin: 0 2.4rem 2rem 0;
      border: 0.2rem solid ${COLOR_WHITE};
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
