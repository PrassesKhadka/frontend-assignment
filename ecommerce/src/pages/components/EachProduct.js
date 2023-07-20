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
          <Price>{`${price}$`}</Price>
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  justify-content: center;
`;
const InnerWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
`;
const Image = styled.img`
  width: 25%;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;
const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;
const Price = styled.h3`
  display: flex;
`;
const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;
const Rating = styled.p`
  display: flex;
`;
const Category = styled.h4`
  display: flex;
`;
export default EachProduct;
