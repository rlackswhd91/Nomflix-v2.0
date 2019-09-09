import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  width: 50%;
  left: 0;
  z-index: 2;
  transform: ${props => props.active && "translateX(100%)"};
`;
const Title = styled.h1`
  font-size: 30px;
  color: #fa983a;
  font-weight: bold;
  margin: 0;
`;
const Form = styled.form`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 50px;
  height: 100%;
`;
const Link = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

const SocialContainer = styled.div`
  margin: 20px 0;
  & a {
    border: 1px solid #dddddd;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 0 5px;
    /* 중요 */
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
`;
const Input = styled.input`
  padding: 12px 15px;
  background-color: #eee;
  border: none;
  margin: 8px 0;
  width: 100%;
  outline: none;
`;
const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #fa983a;
  color: #fff;
  background: #fa983a;
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
const SignInForm = ({ active }) => {
  return (
    <Container active={active}>
      <Form>
        <Title>Sign In</Title>
        <SocialContainer>
          <Link href="#" class="social">
            <i class="fab fa-facebook-f"></i>
          </Link>
          <Link href="#" class="social">
            <i class="fab fa-google-plus-g"></i>
          </Link>
          <Link href="#" class="social">
            <i class="fab fa-github"></i>
          </Link>
        </SocialContainer>
        <span>or use your account</span>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Link href="#">Forgot your password?</Link>
        <Button>Sign In</Button>
      </Form>
    </Container>
  );
};
export default SignInForm;
