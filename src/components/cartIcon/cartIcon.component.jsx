import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowCart } from "../../store/cart/cartActions";
import { selectShowCart, selectCartCount } from "../../store/cart/cartSelector";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cartIcon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const showCart = useSelector(selectShowCart);
  const cartCount = useSelector(selectCartCount);

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
