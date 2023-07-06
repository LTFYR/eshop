import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../index.css";

const Error = () => {
  return (
    <ErrorWrapper className="h100">
      <section>
        <h1>404</h1>
        <h3>Error, NOT FOUND</h3>
        <Link to="/">Go to back</Link>
      </section>
    </ErrorWrapper>
  );
};

export default Error;

const ErrorWrapper = styled.main`
  background: hsl(22, 31%, 88%);
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  h1 {
    font-size: 100px;
    margin: 0;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  a {
    text-transform: uppercase;
    background: hsl(22, 31%, 52%);
    color: white;
    display: inline-block;
    font-weight: 400;
    transition: 300ms ease-in-out;
    border-radius: 8px;
    padding: 0.375rem 0.75rem;
    text-decoration: none;
    border-color: transparent;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    font-size: 0.878rem;
  }
`;
