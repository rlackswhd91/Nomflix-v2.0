import React, { useState } from "react";
import SignInForm from "../Components/SignInForm";
import SignUpForm from "../Components/SignUpForm";
import Overlay from "../Components/Overlay";
import styled from "styled-components";

const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.25),
    0px 10px 10px rgba(0, 0, 0, 0.25);
  /* position: relative; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
`;
const SignPage = () => {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <Container class="container" id="container">
      {active ? <div>active</div> : <div>notactive</div>}
      <SignUpForm active={active}></SignUpForm>
      <SignInForm active={active}></SignInForm>
      <Overlay
        active={active}
        setInActive={() => setActive(false)}
        setActive={() => setActive(true)}
      ></Overlay>
    </Container>
  );
};

export default SignPage;
