import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ProductContext } from "../../Contexts/ProductContexts";
import ProductDetails from "../ProductDetails";
import ErrorPage from "../ErrorPage";

const EachProduct = ({ id }) => {
  const { products } = useContext(ProductContext);

  const data = products.find((obj) => obj.id == id);
  const image = data.image;
  const title = data.title;
  const price = data.price;
  const description = data.description;
  const rating = data.rating["rate"];
  const category = data.category;

  return (
    <Wrapper>
      <InnerWrapper>
        <div>
          <Image src={image}></Image>
        </div>
        <div>
          <Title>{title}</Title>
          <Price>{price}</Price>
          <Category>{category}</Category>
          <Rating>{rating}</Rating>
        </div>
        <div>
          <Description>{description}</Description>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display:grid;
  grid-template-rows:repeat(2,1fr)
  grid-template-columns:repeat(2,1fr)
`;
const InnerWrapper = styled.div`
  display: flex;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
`;
const Title = styled.h2`
  display: flex;
`;
const Price = styled.h3`
  display: flex;
`;
const Description = styled.p`
  display: flex;
`;
const Rating = styled.p`
  display: flex;
`;
const Category = styled.h4`
  display: flex;
`;
export default EachProduct;
