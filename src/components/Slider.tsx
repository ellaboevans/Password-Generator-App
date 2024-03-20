import styled from "styled-components";
import { Body_Small, SliderCounter } from "../utils/ReusableStlyes";
import { useStore } from "../store/store";
import {
  COLOR_GREEN,
  COLOR_VERY_DARK_GREY,
  COLOR_WHITE,
} from "../utils/constants";
import { SliderProps } from "../types/types";
import { makeLongShadow } from "../helpers/helpers";

// excess height to improve interactive area / accessibility
const height = "36px";
const thumbHeight = 36;
const trackHeight = "16px";

// colours

const upperBackground = `linear-gradient(to bottom, ${COLOR_VERY_DARK_GREY}, ${COLOR_VERY_DARK_GREY}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${COLOR_GREEN}, ${COLOR_GREEN}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;

function Slider({ min, max }: SliderProps) {
  const { sliderValue, moveSlider } = useStore((state) => ({
    sliderValue: state.sliderValue,
    // setSliderValue: state.setSliderValue,
    moveSlider: state.moveSlider,
  }));

  return (
    <Wrapper>
      <HeadingContainer>
        <Body_Small>Character Length</Body_Small>
        <SliderCounter>{sliderValue}</SliderCounter>
      </HeadingContainer>
      <Range
        type="range"
        min={min}
        max={max}
        value={sliderValue}
        onChange={moveSlider}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 25px;
`;

const Range = styled.input`
  overflow: hidden;
  display: block;
  appearance: none;
  width: 100%;
  margin: 0;
  height: ${height};
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height};
    background: ${lowerBackground};
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${thumbHeight}px;
    width: ${thumbHeight}px;
    background: ${COLOR_WHITE};
    border-radius: 100%;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: ${makeLongShadow(COLOR_VERY_DARK_GREY, "-10px")};
    transition: background-color 150ms;
  }

  &::-moz-range-progress {
    background: ${lowerBackground};
  }

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: ${height};
    background: ${upperBackground};
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${COLOR_WHITE};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }

  width: 100%;
  height: ${height}px;
  border: 0;
  /* color needed to hide track marks */
  color: transparent;
  background: transparent;

  &::-ms-thumb {
    appearance: none;
    height: 100%;
    width: 100%;
    background: ${COLOR_WHITE};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
    /* IE Edge thinks it can support -webkit prefixes */
    top: 0;
    margin: 0;
    box-shadow: none;
  }

  &:hover,
  &:focus {
    &::-webkit-slider-thumb {
      background-color: ${COLOR_VERY_DARK_GREY};
      border: 3px solid ${COLOR_GREEN};
    }
    &::-moz-range-thumb {
      background-color: ${COLOR_VERY_DARK_GREY};
    }
    &::-ms-thumb {
      background-color: ${COLOR_VERY_DARK_GREY};
    }
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;

export default Slider;
