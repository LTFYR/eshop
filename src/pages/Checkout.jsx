import React from "react";
import { BreadCrumb, Stripe } from "../components";
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Checkout = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <BreadCrumb title="checkout" />
      <CheckoutWrapper
        style={{ justifyContent: "center" }}
        className="checkout h"
      >
        {cart.length < 1 ? (
          <div className="textcenter">
            <h2>Your cart is an empty</h2>
            <Link to="/products" className="btn">
              go to products
            </Link>
          </div>
        ) : (
          <Stripe />
        )}
      </CheckoutWrapper>
    </main>
  );
};

export default Checkout;

const CheckoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: "center";
  margin: 0 auto;
  .textcenter {
    text-align: center;
  }
`;
