import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default ProductDetails;
