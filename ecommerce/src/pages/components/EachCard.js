import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductDetails from "../ProductDetails";
import { ProductContext } from "../../Contexts/ProductContexts";
import { useContext } from "react";
import { useState } from "react";

const EachCard = ({ value }) => {
  const { products, cart, setCart } = useContext(ProductContext);

  return (
    <Wrapper>
      <CustomLink to={`/ProductDetails/${value.id}`}>
        <Image src={value.image}></Image>
      </CustomLink>
      <Info>
        <Title>{value.title}</Title>
        <Price>{`${value.price}$`}</Price>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2%;
  flex-grow: 1;
  flex-basis: 16%;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

  display: flex;
  flex-direction:column;
  @media (max-width: 920px) {
    flex: 1 21%;
  }

  @media (max-width: 600px) {
    .product-card 
      flex: 1 46%;
    
  }
`;

const CustomLink = styled(Link)``;
const Image = styled.img`
  max-width: 40%;
`;
const Info = styled.div`
  margin-top: auto;
`;
const Title = styled.h5`
  color: black;
`;
const Price = styled.h6`
  margin-top: 5px;
  color: red;
`;

export default EachCard;
