import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        
        <h4><b>AI Explorer</b></h4>
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: Black;
  text-color: White;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  
  
`;

export default Header;
