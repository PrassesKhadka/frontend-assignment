import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <a
        href="https://github.com/PrassesKhadka/frontend-assignment/tree/main/ecommerce"
        alt="git-hub link"
      >
        <Image src="./images/github.png"></Image>
      </a>
      <span>©Prasses Khadka</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  margin-top: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 25px;
  width: 25px;
  border: 1px solid black;
  border-radius: 50%;
`;
export default Footer;
