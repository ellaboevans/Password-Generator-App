import styled from "styled-components";
import {
  BREAKPOINTS,
  COLOR_DARK_GREY,
  COLOR_GREEN,
  COLOR_WHITE,
} from "../utils/constants";
import { Heading_Large } from "../utils/ReusableStlyes";
import CopyIcon from "./CopyIcon";
import { useStore } from "../store/store";

function PasswordHolder() {
  const { password, setCopyToClipboard, isLoading } = useStore((state) => ({
    password: state.password,
    setCopyToClipboard: state.setCopyToClipboard,
    isLoading: state.isLoading,
  }));
  return (
    <CardWrapper>
      <PasswordContainer>
        <Heading_Large currentpassword={password}>
          {password.length > 15 ? password.slice(0, 15) + "..." : password}
        </Heading_Large>
        {isLoading && <CopyText>Copied</CopyText>}
      </PasswordContainer>
      <IconContainer onClick={setCopyToClipboard}>
        <CopyIcon fill={COLOR_GREEN} class="icon" />
      </IconContainer>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 500px;
  background-color: ${COLOR_DARK_GREY};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  position: relative;

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    width: 372px;
    max-width: 360px;
    padding-left: 1.2rem;
  }
`;

const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  width: 92%;
`;

const IconContainer = styled.div`
  z-index: 10;
  display: flex;
  justify-content: center;
  position: absolute;
  right: 1rem;
  gap: 8px;
  width: 1.8rem;
  height: 2rem;
  background-color: ${COLOR_DARK_GREY};
  cursor: pointer;
  transition: all 0.3s;
  .icon {
    @media (max-width: ${BREAKPOINTS.MOBILE}) {
      transform: scale(0.7);
    }
    &:hover {
      fill: ${COLOR_WHITE};
    }
    &:active {
      fill: ${COLOR_GREEN};
    }
  }
`;

const CopyText = styled.span`
  color: ${COLOR_GREEN};
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "JetBrains Mono", monospace;

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 16px;
  }
`;

export default PasswordHolder;
