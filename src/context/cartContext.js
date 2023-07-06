import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cartReducer";
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../action/actions";

const getCartItemsLStorage = () => {
  let basketItems = localStorage.getItem("basket");
  if (basketItems) {
    return JSON.parse(localStorage.getItem("basket"));
  } else {
    return [];
  }
};

console.log(getCartItemsLStorage());
const initialState = {
  cart: getCartItemsLStorage(),
  cartItems: 0,
  totalAmount: 0,
  fee: 600,
};

console.log(initialState);

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToBasket = (id, amount, color, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, color, product } });
  };

  const removeFromBasket = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  const controlValue = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };

  const clearBasket = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("basket", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToBasket,
        removeFromBasket,
        clearBasket,
        controlValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
