import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cartActions";
import { selectCartItems } from "../../store/cart/cartSelector";

import { Button } from "@chakra-ui/react";
import { ProductCardContainer, Footer } from "./recipeCard.styles";

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, img } = recipe;

  const handleAddToCart = () => {
    dispatch(addItemToCart(cartItems, recipe));
  };

  return (
    <ProductCardContainer>
      <img src={img} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </Footer>
      <Button mt={4} colorScheme="teal" onClick={handleAddToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default RecipeCard;
