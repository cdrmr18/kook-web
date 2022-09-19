import React from "react";
import { CartDropDownContainer, CartItems } from "./cartDropdown.styles.jsx";
import { Button } from "@chakra-ui/react";
const CartDropdown = () => {
  return (
    <CartDropDownContainer>
      <CartItems></CartItems>
      <Button mt={4} colorScheme="teal">
        Checkout
      </Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
