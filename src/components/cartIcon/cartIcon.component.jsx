import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowCart } from "../../store/cart/cartActions";
import { getToggleCart } from "../../store/cart/cartSelector";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cartIcon.styles";

const CartIcon = () => {
  const { showCart, cartCount } = useSelector(getToggleCart);
  const dispatch = useDispatch();

  const handleToggleCart = () => {
    dispatch(toggleShowCart(!showCart));
  };
  return (
    <CartIconContainer onClick={handleToggleCart}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
