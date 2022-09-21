import { createContext, useReducer } from "react";

const addCartItem = (cartItems, recipeToAdd) => {
  const existingItem = cartItems.find((item) => item.id === recipeToAdd.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === recipeToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...recipeToAdd, quantity: 1 }];
};

const removeItemFromCart = (cartItems, recipeToRemove) => {
  return cartItems.filter((item) => item.id !== recipeToRemove.id);
};

const decrementCartItem = (cartItems, recipeToDecrement) => {
  const existingItem = cartItems.find(
    (item) => item.id === recipeToDecrement.id
  );

  if (existingItem.quantity === 1) {
    return removeItemFromCart(cartItems, recipeToDecrement);
  }

  return cartItems.map((item) =>
    item.id === recipeToDecrement.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  showCart: false,
  setShowCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const SET_CART_ITEMS = "SET_CART_ITEMS";
export const TOGGLE_SHOW_CART = "TOGGLE_SHOW_CART";

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case TOGGLE_SHOW_CART:
      return {
        ...state,
        showCart: payload,
      };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  cartItems: [],
  showCart: false,
  cartCount: 0,
  cartTotal: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, cartCount, cartTotal, showCart } = state;

  const toggleShowCart = (bool) => {
    dispatch({ type: TOGGLE_SHOW_CART, payload: bool });
  };

  const updateCartItems = (newCartItems) => {
    const newCartTotal = newCartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );

    const newCartCount = newCartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    dispatch({
      type: SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    });
  };

  const addItemToCart = (recipeToAdd) => {
    const newCartItems = addCartItem(cartItems, recipeToAdd);
    updateCartItems(newCartItems);
  };

  const decrementItemInCart = (recipeToDecrement) => {
    const newCartItems = decrementCartItem(cartItems, recipeToDecrement);
    updateCartItems(newCartItems);
  };

  const removeCartItem = (recipeToRemove) => {
    const newCartItems = removeItemFromCart(cartItems, recipeToRemove);
    updateCartItems(newCartItems);
  };

  const value = {
    showCart,
    toggleShowCart,
    addItemToCart,
    removeCartItem,
    cartItems,
    decrementItemInCart,
    cartTotal,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
