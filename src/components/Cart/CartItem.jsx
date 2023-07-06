import React from "react";
import { useCartContext } from "../../context/cartContext";
import { formatPrice } from "../../utils/price";
import BasketButtons from "../BasketButtons";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ id, image, name, price, amount, color }) => {
  const { removeFromBasket, controlValue } = useCartContext();

  const increase = () => {
    controlValue(id, "increase");
  };

  const decrease = () => {
    controlValue(id, "decrease");
  };
  return (
    <div className="cart-item">
      <div className="cart-item__title">
        <img src={image} alt={name} />
        <div>
          <h5 className="cart-item__title--name">{name}</h5>
          <p className="cart-item__title--color">
            color : <span style={{ background: color }}></span>
          </p>
          <h5 className="cart-item__title--price">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="cart-item--total">{formatPrice(price)}</h5>
      {/* <BasketButtons
        controller={amount}
        increase={increase}
        decrease={decrease}
      /> */}
      <p>{amount} p(s)</p>
      <h5 className="cart-item--subtotal">{formatPrice(price * amount)}</h5>
      <button
        type="button"
        className="cart-item--remove"
        onClick={() => removeFromBasket(id)}
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
