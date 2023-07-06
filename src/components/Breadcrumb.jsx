import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BreadCrumb = ({ title, product }) => {
  return (
    <HeroWrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {product && <Link to="/products">/ Products</Link>}/ {title}
        </h3>
      </div>
    </HeroWrapper>
  );
};

export default BreadCrumb;

const HeroWrapper = styled.section`
  background: hsl(22, 31%, 88%);
  color: #ab7a5f;
  width: 100%;
  text-transform: capitalize;
  min-height: 20vh;
  display: flex;
  margin-top: 126px;
  align-items: center;
  a {
    text-decoration: none;
    color: hsl(22, 28%, 37%);
    padding: 0.5rem;
  }
`;
