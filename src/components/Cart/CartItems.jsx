import React from "react";
import { useCartContext } from "../../context/cartContext";
import { CartCol, CartItem, CartTotal } from "../index";
import { Link } from "react-router-dom";
import "../../assets/sass/pages/Cart.scss";

const CartItems = () => {
  const { cart, clearBasket } = useCartContext();

  return (
    <div className="cart-container section section-center">
      <CartCol />
      {cart.map((c) => {
        return <CartItem key={c.id} {...c} />;
      })}
      <hr />
      <div className="cart-container__link">
        <Link to="/products" className="cart-container__link--btn">
          Continue to shopping
        </Link>
        <button
          type="button"
          className="cart-container__link--btn clear"
          onClick={clearBasket}
        >
          Remove all products
        </button>
      </div>
      <CartTotal />
    </div>
  );
};

export default CartItems;
