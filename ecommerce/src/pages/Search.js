import React from "react";
import { ProductContext } from "../Contexts/ProductContexts";
import { useContext } from "react";
import EachCard from "./components/EachCard";
import EmptySearch from "./components/EmptySearch";
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
      {filteredProducts[0] ? (
        filteredProducts.map((value) => (
          <EachCard key={value.id} value={value} />
        ))
      ) : (
        <EmptySearch />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;
export default Search;
