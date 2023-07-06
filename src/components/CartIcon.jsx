import React from "react";
import "../assets/sass/components/Navbar.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { useProductsContext } from "../context/productsContext";
import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";

const CartIcon = () => {
  const { closeSidebar } = useProductsContext();
  const { totalAmount, cart, clearBasket } = useCartContext();

  const { loginWithRedirect, logout, logedUser } = useUserContext();

  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: "24px" }}
      className="cart-wrapper"
    >
      <Link to="/cart" className="cart-wrapper__btn" onClick={closeSidebar}>
        Cart
        <span className="cart-wrapper__btn__icon">
          <FaShoppingCart />
          <span className="cart-wrapper__btn__icon--count">{cart.length}</span>
        </span>
      </Link>
      {logedUser ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link
            to="/profile"
            style={{
              textTransform: "capitalize",
              fontSize: "24px",
              margin: 0,
              color: "white",
            }}
          >
            {logedUser.nickname}
          </Link>
          {/* <button
            type="button"
            className="cart-wrapper__auth-btn"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout <FaUserMinus />
          </button> */}
        </div>
      ) : (
        <button
          type="button"
          className="cart-wrapper__auth-btn"
          onClick={loginWithRedirect}
        >
          Login <FaUserPlus />
        </button>
      )}
    </div>
  );
};

export default CartIcon;
