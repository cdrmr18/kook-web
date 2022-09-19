import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { CartContext } from "../../context/cart.context";
import { ProductCardContainer, Footer } from "./recipeCard.styles";

const RecipeCard = ({ recipe }) => {
  const { name, price, img } = recipe;
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addItemToCart(recipe);
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
