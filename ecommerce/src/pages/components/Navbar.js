import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductContext } from "../../Contexts/ProductContexts";
import { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const { products, search, setSearch } = useContext(ProductContext);
  console.log(search);
  return (
    <Wrapper>
      <Nav>
        <CustomLink to="/">
          <Logo>OnlineStore</Logo>
          Home
        </CustomLink>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Search>
            <Input
              type="text"
              placeholder="Search here"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></Input>
          </Search>
        </form>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Logo = styled.h1`
  text-decoration: none;
  font-size: 35px;
  font-weight: 100;
  @media screen and (min-width: 1024px) {
    margin-right: 150px;
  }
`;
const Search = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;
const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  max-width: 100vw;
  background: #fffcf2;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  padding: 15px;
  list-style: none;
`;
const Input = styled.input`
  height: 100%;
  width: 100%;
  border: 1px solid black;
  background-color: #fff;
  padding: 8px;
  border-radius: 15px;
  outline: none;
  color: #9dbfaf;
  &:focus {
    border: 1px solid blue;
  }
`;
const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  column-gap: 20px;
  list-style: none;
`;
export default Navbar;
