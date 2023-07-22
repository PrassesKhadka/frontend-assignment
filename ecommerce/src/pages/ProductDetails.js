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
      <EachProduct id={id} />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export default ProductDetails;
