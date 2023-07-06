import React from "react";
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import "../assets/sass/pages/Cart.scss";
import { BreadCrumb, CartItems } from "../components/index";

const Cart = () => {
  const { cart } = useCartContext();

  return (
    <>
      <BreadCrumb title="cart" />
      <div className="cart h">
        <CartItems />
      </div>
    </>
  );
};

export default Cart;
