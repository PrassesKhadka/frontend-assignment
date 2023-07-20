import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no,This route doesnot exist</h1>
      <Link to="/">You can go back to the home page</Link>
    </div>
  );
};

export default ErrorPage;
