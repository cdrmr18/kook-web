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

  const value = { showCart, setShowCart, addItemToCart, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
