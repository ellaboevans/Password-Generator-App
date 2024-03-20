import styled from "styled-components";
import { Body_Small, SliderCounter } from "../utils/ReusableStlyes";
import { useStore } from "../store/store";
import {
  COLOR_GREEN,
  COLOR_VERY_DARK_GREY,
  COLOR_WHITE,
  HEIGHT,
  LOWER_BACKGROUND,
  THUMB_HEIGHT,
  UPPER_BACKGROUND,
} from "../utils/constants";
import { SliderProps } from "../types/types";
import { makeLongShadow } from "../helpers/helpers";

function Slider({ min, max }: SliderProps) {
  const { sliderValue, moveSlider } = useStore((state) => ({
    sliderValue: state.sliderValue,
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
  height: ${HEIGHT};
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${HEIGHT};
    background: ${LOWER_BACKGROUND};
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${THUMB_HEIGHT}px;
    width: ${THUMB_HEIGHT}px;
    background: ${COLOR_WHITE};
    border-radius: 100%;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: ${makeLongShadow(COLOR_VERY_DARK_GREY, "-10px")};
    transition: background-color 150ms;
  }

  &::-moz-range-progress {
    background: ${LOWER_BACKGROUND};
  }

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: ${HEIGHT};
    background: ${UPPER_BACKGROUND};
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${THUMB_HEIGHT};
    width: ${THUMB_HEIGHT};
    background: ${COLOR_WHITE};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }

  width: 100%;
  height: ${HEIGHT};
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
  margin-bottom: 0.5rem;
`;

export default Slider;
