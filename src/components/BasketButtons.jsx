import React from "react";
import "../assets/sass/components/ProductDetail.scss";
import { FaMinus, FaPlus } from "react-icons/fa";

const BasketButtons = ({ controller, increase, decrease }) => {
  return (
    <div className="basket-btns">
      <button
        type="button"
        className="basket-btns__increase"
        onClick={decrease}
      >
        <FaMinus />
      </button>
      <h2 className="basket-btns__quantity">{controller}</h2>
      <button
        type="button"
        className="basket-btns__decrease"
        onClick={increase}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default BasketButtons;
