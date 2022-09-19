import React, { useContext } from "react";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cartIcon.styles";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { showCart, setShowCart, cartCount } = useContext(CartContext);
  const handleToggleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <CartIconContainer onClick={handleToggleCart}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
