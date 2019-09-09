import React from "react";
import styled from "styled-components";

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  transform: ${props => props.active && "translateX(-100%)"};
  z-index: 100;
`;

const Overlay = styled.div`
  background: #ff416c;
  background: linear-gradient(to right, #ff4b2b, #ff9f1a) no-repeat 0 0 / cover;
  color: white;
  position: relative;
  left: -100%;
  width: 200%;
  height: 100%;
  transform: ${props => (props.active ? "translateX(50%)" : "translateX(0)")};
  transition: transform 0.6s ease-in-out;
`;

const LeftPanel = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 0 40px;
  text-align: center;
  transform: ${props => (props.active ? "translateX(0)" : "translateX(-20%)")};
  transition: transform 0.6s ease-in-out;
`;
const RightPanel = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 0 40px;
  text-align: center;
  right: ${props => !props.isLeft && 0};
  right: 0;
  transform: ${props => (props.active ? "translateX(20%)" : "translateX(0)")};
  transition: transform 0.6s ease-in-out;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
`;

const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;
const GhostButton = styled.button`
  border-radius: 20px;
  border: 1px solid #fff;
  color: #fff;
  background: transparent;
  font-size: 12px;
  padding: 12px 45px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

const Overlays = ({ active, setActive, setInActive }) => (
  <OverlayContainer active={active}>
    <Overlay active={active}>
      <LeftPanel active={active}>
        <Title>Welcome Back!</Title>
        <Paragraph>
          To keep connected with us please login with your personal info
        </Paragraph>
        <GhostButton class="ghost" id="signIn" onClick={setInActive}>
          Sign In
        </GhostButton>
      </LeftPanel>
      <RightPanel active={active}>
        <Title>Hello, Friend!</Title>
        <Paragraph>
          Enter your personal details and start journey with us
        </Paragraph>
        <GhostButton class="ghost" id="signUp" onClick={setActive}>
          Sign Up
        </GhostButton>
      </RightPanel>
    </Overlay>
  </OverlayContainer>
);
export default Overlays;
