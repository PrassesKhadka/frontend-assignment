import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { ProductContext } from "../../Contexts/ProductContexts";
import EachCard from "./EachCard";
const Main = ({ data }) => {
  const { products, setProducts, cart, setCart } = useContext(ProductContext);
  useEffect(() => {
    setProducts(data);
  }, []);
  console.log(products);
  return (
    <div>
      {products.map((value) => (
        <EachCard value={value} />
      ))}
    </div>
  );
};

export default Main;
