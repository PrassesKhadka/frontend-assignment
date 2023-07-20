import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ProductContext } from "../../Contexts/ProductContexts";
import ProductDetails from "../ProductDetails";
import ErrorPage from "../ErrorPage";

const EachProduct = ({ id }) => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
`;
const InnerWrapper = styled.div`
  display: flex;
`;
export default EachProduct;
