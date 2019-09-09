import React from "react";
// import styles from "./Header.module.css";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  height: 50px;
  width: 80px;
  text-align: center;
  border-bottom: 3px solid
    ${props => (props.current ? "#fa983a" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/" activeclassname="active">
          Movies
        </SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv" activeclassname="active">
          TV
        </SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search" activeclassname="active">
          Search
        </SLink>
      </Item>
      <Item current={pathname === "/sign"}>
        <SLink to="/sign" activeclassname="active">
          Sign In
        </SLink>
      </Item>
    </List>
  </Header>
));
