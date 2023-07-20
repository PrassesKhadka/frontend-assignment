import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductDetails from "../ProductDetails";

const EachCard = ({ value }) => {
  return (
    <Wrapper>
      <CustomLink to={`/ProductDetails/:${value.id}`}>
        <Image src={value.image}></Image>
      </CustomLink>
      <Title>{value.title}</Title>
      <Price>{`${value.price}$`}</Price>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const CustomLink = styled(Link)``;
const Image = styled.img`
  width: 100px;
  height: 100px;
  display: block;
`;
const Title = styled.h2`
  text-decoration: none;
`;
const Price = styled.p``;
export default EachCard;
