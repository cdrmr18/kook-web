import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cartItem/cartItem.component.jsx";

import { Button } from "@chakra-ui/react";
import { CartDropDownContainer, CartItems } from "./cartDropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem cartItem={item} />
        ))}
      </CartItems>
      <Button mt={4} colorScheme="teal">
        Checkout
      </Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
