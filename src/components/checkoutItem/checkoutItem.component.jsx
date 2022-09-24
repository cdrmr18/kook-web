import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeCartItem,
  decrementItemInCart,
} from "../../store/cart/cartActions";
import { selectCartReducer } from "../../store/cart/cartSelector";

import {
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
} from "./checkoutItem.styles";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, img, quantity } = item;
  const { cartItems } = useSelector(selectCartReducer);

  const handleItemDecrement = () => {
    dispatch(decrementItemInCart(cartItems, item));
  };

  const handleItemAdd = () => {
    dispatch(addItemToCart(cartItems, item));
  };

  const handleItemRemoval = () => {
    dispatch(removeCartItem(cartItems, item));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={img} alt={`${name}`} />
      </ImageContainer>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleItemDecrement}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleItemAdd}>
          &#10095;
        </div>
      </span>
      <span className="price">$ {price}</span>
      <RemoveButton onClick={handleItemRemoval}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
