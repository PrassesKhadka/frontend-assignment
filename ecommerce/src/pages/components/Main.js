import React, { useContext } from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { ProductContext } from "../../Contexts/ProductContexts";
import EachCard from "./EachCard";
const Main = ({ data }) => {
  const { products, setProducts, cart, setCart } = useContext(ProductContext);

  useEffect(() => {
    setProducts(data);
  }, []);

  console.log(products);

  return (
    <Wrapper>
      {products.map((value) => (
        <EachCard value={value} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
`;
export default Main;
