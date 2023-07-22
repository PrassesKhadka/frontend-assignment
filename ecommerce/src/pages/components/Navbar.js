import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductContext } from "../../Contexts/ProductContexts";
import { useContext } from "react";

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
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input
              type="text"
              placeholder="Search here"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></Input>
          </form>
        </div>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Logo = styled.div`
  text-decoration: none;
  font-size: 22px;
  font-weight: 500;
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
  border: none;
  outline: none;
  border-radius: 6px;
  background-color: #fff;
  padding: 5px 15px 5px 45px;
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
