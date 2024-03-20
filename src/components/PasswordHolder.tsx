import styled from "styled-components";
import { COLOR_DARK_GREY, COLOR_GREEN, COLOR_WHITE } from "../utils/constants";
import { Heading_Large } from "../utils/ReusableStlyes";
import CopyIcon from "./CopyIcon";
import { useStore } from "../store/store";

function PasswordHolder() {
  const { password, setToClipboard, isLoading } = useStore((state) => ({
    password: state.password,
    setToClipboard: state.setToClipboard,
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
      <IconContainer onClick={setToClipboard}>
        <CopyIcon fill={COLOR_GREEN} class="icon" />
      </IconContainer>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 540px;
  background-color: ${COLOR_DARK_GREY};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  position: relative;
`;

const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
`;

const IconContainer = styled.div`
  position: absolute;
  z-index: 1;
  right: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 1.8rem;
  background-color: ${COLOR_DARK_GREY};
  cursor: pointer;
  transition: all 0.3s;
  .icon {
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
  font-family: "JETBRAINS MONO", monospace;
`;

export default PasswordHolder;
