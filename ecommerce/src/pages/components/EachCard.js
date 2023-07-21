import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductDetails from "../ProductDetails";

const EachCard = ({ value }) => {
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
  max-width: 100%;
`;
const Info = styled.div`
  margin-top: auto;
`;
const Title = styled.h5`
  text-decoration: none;
`;
const Price = styled.h6``;
export default EachCard;
