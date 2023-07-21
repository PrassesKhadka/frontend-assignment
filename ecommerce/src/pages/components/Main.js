import React, { useContext } from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { ProductContext } from "../../Contexts/ProductContexts";
import EachCard from "./EachCard";
import Search from "../Search";

const Main = ({ data }) => {
  const { products, setProducts, cart, setCart, search, setSearch } =
    useContext(ProductContext);

  useEffect(() => {
    setProducts(data);
  }, []);

  console.log(products);

  return (
    <Wrapper>
      {search ? (
        <Search />
      ) : (
        products.map((value) => <EachCard value={value} />)
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export default Main;
