import React, { useContext } from "react";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cartIcon.styles";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { showCart, toggleShowCart, cartCount } = useContext(CartContext);
  const handleToggleCart = () => {
    toggleShowCart(!showCart);
  };
  return (
    <CartIconContainer onClick={handleToggleCart}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
