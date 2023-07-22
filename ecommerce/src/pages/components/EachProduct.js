import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ProductContext } from "../../Contexts/ProductContexts";
import ProductDetails from "../ProductDetails";

const EachProduct = ({ id }) => {
  const { products } = useContext(ProductContext);
  const data = products.find((obj) => obj.id == id);
  const image = data.image;
  const title = data.title.toUpperCase();
  const price = data.price;
  const description = data.description.toUpperCase();
  const rating = data.rating["rate"];
  const category = data.category.toUpperCase();

  return (
    <Wrapper>
      <InnerWrapper>
        <Gallery>
          <Image src={image}></Image>
        </Gallery>
        <Details>
          <Title>{title}</Title>
          <Price>{`${price}$`}</Price>
          <Category>{category}</Category>
          <Description>{description}</Description>
          <Rating>{`Rating: ${rating}`}</Rating>
          <Button>Add to cart</Button>
        </Details>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InnerWrapper = styled.div`
  width: 90%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Gallery = styled.div`
  flex-basis: 30%;
  //background: #241e20;
  background: white;
  &:hover {
    transform: scale(1.05);
  }
  box-shadow: -10px 5px 10px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 80%;
  display: block;
  padding-top: 60%;
`;
const Details = styled.div`
  flex-basis: 53%;
  background: #fff;

  padding: 30px;
  box-shadow: -10px 5px 10px 10px rgba(0, 0, 0, 0.1);
  font-size: 13px;
  font-weight: 500;
  color: black;
`;

const Title = styled.h1`
  color: black;
  font-size: 35px;
`;
const Price = styled.h2`
  color: red;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #00d874;
`;
const Category = styled.h3`
  margin-bottom: 10px;
  color: blue;
`;
const Description = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 10px;
`;
const Rating = styled.p`
  display: flex;
  color: red;
`;
const Button = styled.button`
  background: #553ffa;
  color: #fff;
  font-size: 17px;
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  border: 0;
  outline: 0;
  margin-top: 20px;
  box-shadow: 0 10px 10px rgba(85, 63, 240, 0.25);
  cursor: pointer;
`;

export default EachProduct;
