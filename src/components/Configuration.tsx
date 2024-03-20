import styled from "styled-components";
import {
  COLOR_DARK_GREY,
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "../utils/constants";
import Slider from "./Slider";
import PasswordStrength from "./PasswordStrength";
import { HiArrowRight } from "react-icons/hi2";
import CustomButton from "./Button";
import CheckBox from "./CheckBox";
import { useStore } from "../store/store";

function Configuration() {
  // Consume Store Values
  const {
    setIsLowercase,
    setIsUppercase,
    setIncludeNumbers,
    setIncludeSymbols,
    isUppercase,
    isLowercase,
    includeNumbers,
    includeSymbols,
    getSliderValue,
    generatePassword,
    strengthValue,
  } = useStore((state) => ({
    sliderValue: state.sliderValue,
    getSliderValue: state.getSliderValue,
    setIsLowercase: state.setIsLowercase,
    isLowercase: state.isLowercase,
    setIsUppercase: state.setIsUppercase,
    isUppercase: state.isUppercase,
    setIncludeNumbers: state.setIncludeNumbers,
    includeNumbers: state.includeNumbers,
    setIncludeSymbols: state.setIncludeSymbols,
    includeSymbols: state.includeSymbols,
    generatePassword: state.generatePassword,
    strengthValue: state.strengthValue,
  }));

  return (
    <Wrapper>
      <Slider
        min={MIN_PASSWORD_LENGTH}
        max={MAX_PASSWORD_LENGTH}
        classes="slider"
        updateValue={getSliderValue}
      />
      <CheckBox
        checked={isUppercase}
        text="Include Uppercase Letters"
        id="iul"
        setter={setIsUppercase}
      />
      <CheckBox
        checked={isLowercase}
        text="Include Lowercase Letters"
        id="ill"
        setter={setIsLowercase}
      />
      <CheckBox
        checked={includeNumbers}
        text="Include Numbers"
        id="in"
        setter={setIncludeNumbers}
      />
      <CheckBox
        checked={includeSymbols}
        text="Include Symbols"
        id={"is"}
        setter={setIncludeSymbols}
      />
      <PasswordStrength strengthValue={strengthValue} />
      <CustomButton clickFunc={generatePassword}>
        Generate <HiArrowRight />
      </CustomButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 540px;
  background-color: ${COLOR_DARK_GREY};
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

export default Configuration;
