import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EachProduct from "./components/EachProduct";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <Navbar />
      <EachProduct id={id} />
      <Footer />
    </div>
  );
};

export default ProductDetails;
