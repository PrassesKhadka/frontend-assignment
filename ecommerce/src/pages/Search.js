import React from "react";
import { ProductContext } from "../Contexts/ProductContexts";
import { useContext } from "react";
import EachCard from "./components/EachCard";

const Search = () => {
  const { products, search } = useContext(ProductContext);
  return (
    <div>
      {/* {products.filter((values) => {
        if (values.title.toLowerCase().includes(search.toLowerCase)) {
          console.log(values);
          return <EachCard key={values.id} id={values.id} />;
        } else return <div></div>;
      })} */}
    </div>
  );
};

export default Search;
