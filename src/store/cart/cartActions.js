import { TOGGLE_SHOW_CART, SET_CART_ITEMS } from "./cartTypes.js";

export const toggleShowCart = (bool) => {
  return { type: TOGGLE_SHOW_CART, payload: bool };
};

// export const updateCartItems = (newCartItems) => {

//   return {
//     type: SET_CART_ITEMS,
//     payload: {
//       cartItems: newCartItems,
//       cartCount: newCartCount,
//       cartTotal: newCartTotal,
//     },
//   };
// };

export const addCartItem = (cartItems, recipeToAdd) => {
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

export const removeItemFromCart = (cartItems, recipeToRemove) => {
  return cartItems.filter((item) => item.id !== recipeToRemove.id);
};

export const decrementCartItem = (cartItems, recipeToDecrement) => {
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

export const addItemToCart = (cartItems, recipeToAdd) => {
  const newCartItems = addCartItem(cartItems, recipeToAdd);
  return { type: SET_CART_ITEMS, payload: newCartItems };
};

export const decrementItemInCart = (cartItems, recipeToDecrement) => {
  const newCartItems = decrementCartItem(cartItems, recipeToDecrement);
  return { type: SET_CART_ITEMS, payload: newCartItems };
};

export const removeCartItem = (cartItems, recipeToRemove) => {
  const newCartItems = removeItemFromCart(cartItems, recipeToRemove);
  return { type: SET_CART_ITEMS, payload: newCartItems };
};
