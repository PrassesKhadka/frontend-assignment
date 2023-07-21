import React from "react";
import { ProductContext } from "../Contexts/ProductContexts";
import { useContext } from "react";
import EachCard from "./components/EachCard";

const Search = () => {
  const { products, search } = useContext(ProductContext);

  const filteredProducts = products.filter((value) => {
    return (
      search.trim() === "" ||
      value.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <div>
        {filteredProducts.map((value) => (
          <EachCard key={value.id} value={value} />
        ))}
      </div>
    </div>
  );
};

export default Search;
