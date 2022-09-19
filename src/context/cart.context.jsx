import { createContext, useState } from "react";

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
});

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (recipeToAdd) => {
    setCartItems(addCartItem(cartItems, recipeToAdd));
  };

  const decrementItemInCart = (recipeToDecrement) => {
    setCartItems(decrementCartItem(cartItems, recipeToDecrement));
  };

  const removeCartItem = (recipeToRemove) => {
    setCartItems(removeItemFromCart(cartItems, recipeToRemove));
  };

  const value = {
    showCart,
    setShowCart,
    addItemToCart,
    removeCartItem,
    cartItems,
    decrementItemInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
