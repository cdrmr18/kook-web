import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../cartItem/cartItem.component.jsx";
import { getCartItems } from "../../store/cart/cartSelector";

import { Button } from "@chakra-ui/react";
import { CartDropDownContainer, CartItems } from "./cartDropdown.styles.jsx";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector(getCartItems);

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
