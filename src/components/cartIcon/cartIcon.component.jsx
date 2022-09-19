import React, { useContext } from "react";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cartIcon.styles";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { showCart, setShowCart } = useContext(CartContext);
  const handleToggleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <CartIconContainer onClick={handleToggleCart}>
      <ShoppingIcon />
      <ItemCount>0</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
