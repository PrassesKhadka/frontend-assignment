import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <CustomLink to="/">
            <Nav>Home</Nav>
          </CustomLink>
        </li>
      </ul>
    </div>
  );
};

const CustomLink = styled(Link)`
  text-decoration: none;
`;
const Nav = styled.h1`
  text-decoration: none;
`;
export default Navbar;
