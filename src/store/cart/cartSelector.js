import { createSelector } from "reselect";

export const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectShowCart = createSelector(
  [selectCartReducer],
  (cart) => cart.showCart
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (newCartItems) =>
    newCartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (newCartItems) => newCartItems.reduce((acc, item) => acc + item.quantity, 0)
);
