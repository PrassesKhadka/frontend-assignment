import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Spinner>
      <HalfSpinner></HalfSpinner>
    </Spinner>
  );
};

const Spinner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
const HalfSpinner = styled.div`
  width: 150px;
  height: 150px;
  border: 3px solid #03fc4e;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spin 0.5s linear 0s infinite;
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
