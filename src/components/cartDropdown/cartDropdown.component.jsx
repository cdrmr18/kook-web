import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cartItem/cartItem.component.jsx";

import { Button } from "@chakra-ui/react";
import { CartDropDownContainer, CartItems } from "./cartDropdown.styles.jsx";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <Button mt={4} colorScheme="teal" onClick={() => navigate("/checkout")}>
        Checkout
      </Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
