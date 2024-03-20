import styled from "styled-components";
import { COLOR_GREY, COLOR_VERY_DARK_GREY } from "./utils/constants";
import { Heading_Medium } from "./utils/ReusableStlyes";
import PasswordHolder from "./components/PasswordHolder";
import Configuration from "./components/Configuration";

function App() {
  return (
    <Wrapper>
      <Heading_Medium>Password Generator</Heading_Medium>
      <PasswordHolder />
      <Configuration />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${COLOR_GREY};
  background-color: ${COLOR_VERY_DARK_GREY};
`;

export default App;
