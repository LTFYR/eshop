import React from "react";
import { formatPrice } from "../../utils/price";
import { useCartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/userContext";

const CartTotal = () => {
  const { totalAmount, fee } = useCartContext();
  const { logedUser, loginWithRedirect } = useUserContext();

  return (
    <div className="cart-total">
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(totalAmount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(fee)}</span>
          </p>
          <hr />
          <h4>
            Total : <span>{formatPrice(totalAmount + fee)}</span>
          </h4>
        </article>
        {logedUser ? (
          <Link to="/checkout" className="btn">
            Go to checkout
          </Link>
        ) : (
          <button type="button" onClick={loginWithRedirect} className="btn">
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default CartTotal;
