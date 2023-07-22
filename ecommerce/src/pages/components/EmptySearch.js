import React from "react";
import styled from "styled-components";

const EmptySearch = () => {
  return (
    <Wrapper>
      <h1>Nothing to show</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height:100%
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export default EmptySearch;
