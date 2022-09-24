import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../cartItem/cartItem.component.jsx";
import { selectCartItems } from "../../store/cart/cartSelector";

import { Button } from "@chakra-ui/react";
import { CartDropDownContainer, CartItems } from "./cartDropdown.styles.jsx";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const gotoCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems &&
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
      </CartItems>
      <Button mt={4} colorScheme="teal" onClick={gotoCheckoutHandler}>
        Checkout
      </Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
