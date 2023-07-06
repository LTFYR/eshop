import React from "react";
import "../../assets/sass/pages/Cart.scss";

const CartCol = () => {
  return (
    <div className="cart-column">
      <ul className="cart-column__content">
        <li>Product</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Subtotal</li>
        <span></span>
      </ul>
      <hr />
    </div>
  );
};

export default CartCol;
