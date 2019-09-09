import React from "react";
import styled from "styled-components";
import { ReactComponent as SVG } from "../assets/loader.svg";

const Container = styled.div`
  /* width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center; */
  position: absolute;
  top: 45%;
  left: 47%;
  transfrom: (-50%, -50%);
`;
const Spinner = styled(SVG)`
  width: 75px;
  height: 75px;
`;
export default () => (
  <Container>
    <Spinner></Spinner>
  </Container>
);
