import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../assets/sass/components/ProductDetail.scss";
import { BasketButtons } from "./index";
import { useCartContext } from "../context/cartContext";

const Basket = ({ product }) => {
  const { addToBasket } = useCartContext();
  const { id, colors, stock } = product;

  const [main, setMain] = useState(colors[0]);
  const [controller, setController] = useState(1);

  const increase = () => {
    setController((qnt) => {
      let newqnt = qnt + 1;
      if (newqnt > stock) {
        newqnt = stock;
      }
      return newqnt;
    });
  };

  const decrease = () => {
    setController((qnt) => {
      let newqnt = qnt - 1;
      if (newqnt < 1) {
        newqnt = 1;
      }
      return newqnt;
    });
  };
  return (
    <div className="basket">
      <div className="basket__colors">
        <span>colors : </span>
        <div className="basket__colors__color">
          {colors.map((color, ind) => {
            return (
              <button
                style={{ backgroundColor: color }}
                key={ind}
                className={`${
                  main === color
                    ? "basket__colors__color--btn active"
                    : "basket__colors__color--btn"
                }`}
                onClick={() => setMain(color)}
              >
                {main === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="basket__buttons">
        <BasketButtons
          controller={controller}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToBasket(id, controller, main, product)}
        >
          add to cart
        </Link>
      </div>
    </div>
  );
};

export default Basket;
