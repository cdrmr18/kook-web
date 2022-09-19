import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
} from "./checkoutItem.styles";

const CheckoutItem = ({ item }) => {
  const { name, price, img, quantity } = item;
  const { addItemToCart, removeCartItem, decrementItemInCart } =
    useContext(CartContext);

  const handleItemDecrement = () => {
    decrementItemInCart(item);
  };

  const handleItemAdd = () => {
    addItemToCart(item);
  };

  const handleItemRemoval = () => {
    removeCartItem(item);
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
