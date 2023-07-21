import React from "react";
import { ProductContext } from "../Contexts/ProductContexts";
import { useContext } from "react";
import EachCard from "./components/EachCard";
import styled from "styled-components";

const Search = () => {
  const { products, search } = useContext(ProductContext);

  const filteredProducts = products.filter((value) => {
    return (
      search.trim() === "" ||
      value.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <Wrapper>
      {filteredProducts.map((value) => (
        <EachCard key={value.id} value={value} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export default Search;
