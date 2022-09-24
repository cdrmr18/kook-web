import { TOGGLE_SHOW_CART, SET_CART_ITEMS } from "./cartTypes.js";

const INITIAL_STATE = {
  cartItems: [],
  showCart: false,
  cartCount: 0,
  cartTotal: 0,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CART_ITEMS:
      return { ...state, ...payload };
    case TOGGLE_SHOW_CART:
      return { ...state, showCart: payload };
    default:
      return state;
  }
};
