import { useEffect } from "react";
import { COLOR_VERY_DARK_GREY, COLOR_WHITE } from "../utils/constants";
import styled from "styled-components";
import { Body_Medium_2, Body_Small } from "../utils/ReusableStlyes";
import { useStore } from "../store/store";

function PasswordStrength({ strengthValue }: { strengthValue: number }) {
  const { name, lightBars } = useStore((state) => ({
    name: state.name,
    lightBars: state.lightBars,
  }));

  useEffect(() => {
    lightBars(strengthValue);
  }, [strengthValue, lightBars]);

  return (
    <Wrapper>
      <Body_Medium_2>STRENGTH</Body_Medium_2>
      <StrengthContainer className="strength__levels">
        <Body_Small>{name.toUpperCase()}</Body_Small>
        <StrengthLevel className="strength__level-1"></StrengthLevel>
        <StrengthLevel className="strength__level-2"></StrengthLevel>
        <StrengthLevel className="strength__level-3"></StrengthLevel>
        <StrengthLevel className="strength__level-4"></StrengthLevel>
      </StrengthContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1.2rem;
  background-color: ${COLOR_VERY_DARK_GREY};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const StrengthContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const StrengthLevel = styled.span`
  display: block;
  height: 2.6rem;
  width: 0.8rem;
  border: 0.2rem solid ${COLOR_WHITE};
`;
export default PasswordStrength;
