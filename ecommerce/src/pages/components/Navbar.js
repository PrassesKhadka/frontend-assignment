import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductContext } from "../../Contexts/ProductContexts";
import { useContext } from "react";

const Navbar = () => {
  const { products, search, setSearch } = useContext(ProductContext);
  console.log(search);
  return (
    <div>
      <CustomLink to="/">
        <Nav>Home</Nav>
      </CustomLink>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label for="search">Search for any item</label>
          <input
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
        </form>
      </div>
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
