import React from "react";
import sale from "../assets/images/sale.jpg";
import styled from "styled-components";

const Sale = () => {
  return (
    <Wrapper className="sale section-center">
      <div className="saleimg">
        <img src={sale} alt="" />
      </div>
    </Wrapper>
  );
};

export default Sale;

const Wrapper = styled.section`
  padding: 80px 0;
  .saleimg {
    margin: 0 auto;
    max-width: 1290px;
    overflow: hidden;
    img {
      width: 100%;
      border-radius: 4px;
      opacity: 1;
    }
  }
  .saleimg:hover img {
    opacity: 0.9;
    transform: scale(1);
  }
`;
