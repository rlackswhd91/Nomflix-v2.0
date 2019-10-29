import React, { useState } from "react";
import SignInForm from "../Components/SignInForm";
import SignUpForm from "../Components/SignUpForm";
import Overlay from "../Components/Overlay";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Wrapper = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;
const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.25),
    0px 10px 10px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
  width: 768px;
  min-height: 480px;
`;
const SignPage = () => {
  const [active, setActive] = useState(false);

  return (
    <div style={{ overflow: "hidden" }}>
      <Wrapper>
        <Fade right>
          <Container>
            <SignUpForm active={active}></SignUpForm>
            <SignInForm active={active}></SignInForm>
            <Overlay
              active={active}
              setInActive={() => setActive(false)}
              setActive={() => setActive(true)}
            ></Overlay>
          </Container>
        </Fade>
      </Wrapper>
    </div>
  );
};

export default SignPage;
