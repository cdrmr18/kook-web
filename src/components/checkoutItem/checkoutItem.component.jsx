import React from "react";
import {
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
} from "./checkoutItem.styles";

const CheckoutItem = ({ item }) => {
  const { name, price, img, quantity } = item;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={img} alt={`${name}`} />
      </ImageContainer>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow">&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow">&#10095;</div>
      </span>
      <span className="price">$ {price}</span>
      <RemoveButton>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
