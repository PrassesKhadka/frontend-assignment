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
      <Price>{value.price}</Price>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
`;

const CustomLink = styled(Link)`
  background-color: #f2f2f2;
  padding: 10px;
  max-width: 100%;
  text-decoration: none;
`;
const Image = styled.img`
  width: 50px;
  height: 100px;
  display: block;
`;
const Title = styled.h2`
  text-decoration: none;
`;
const Price = styled.p``;
export default EachCard;
