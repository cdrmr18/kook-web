import React from "react";
import { useSelector } from "react-redux";
import { selectCartReducer } from "../../store/cart/cartSelector";
import CheckoutItem from "../../components/checkoutItem/checkoutItem.component";
import {
  CheckoutContainer,
  HeaderBlock,
  Total,
  CheckoutHeader,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, cartTotal } = useSelector(selectCartReducer);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}
      <Total>Total: $ {cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
