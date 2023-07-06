import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../action/actions";

const CartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, amount, color, product } = action.payload;
    const exsistItem = state.cart.find((item) => item.id === id + color);
    if (exsistItem) {
      const isExsistInCart = state.cart.map((citem) => {
        if (citem.id === id + color) {
          let newAmount = citem.amount + amount;
          if (newAmount > citem.max) {
            newAmount = citem.max;
          }
          return { ...citem, amount: newAmount };
        } else {
          return citem;
        }
      });
      return { ...state, cart: isExsistInCart };
    } else {
      const basketItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, basketItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const cartItem = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: cartItem };
  }
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;

    const cartItem = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "increase") {
          let newval = item.amount + 1;
          if (newval > item.max) {
            newval = item.max;
          }
          return { ...item, amount: newval };
        }
        if (value === "decrease") {
          let newvalue = item.amount - 1;
          if (newvalue < 1) {
            newvalue = 1;
          }
          return { ...item, amount: newvalue };
        }
        return item;
      }

      return { ...state, cart: cartItem };
    });
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { cartItems, totalAmount } = state.cart.reduce(
      (total, items) => {
        const { amount, price } = items;
        total.cartItems += amount;
        total.totalAmount += price * amount;
        return total;
      },
      { cartItems: 0, totalAmount: 0 }
    );
    return { ...state, totalAmount, cartItems };
  }
  // throw new Error("Error happeeeeeened :)");
};

export default CartReducer;
