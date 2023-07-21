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
      <div className="max-w-7xl mx-auto p-8">
        <EachProduct id={id} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
