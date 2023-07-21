import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EachProduct from "./components/EachProduct";
import styled from "styled-components";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <Wrapper>
      <Navbar />
      <div className="max-w-7xl mx-auto p-8">
        <EachProduct id={id} />
      </div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media screen and (min-width: 426px) {
    postion: absolute;
    margin-left: 15%;
    margin-right: 15%;
  }
`;
export default ProductDetails;
