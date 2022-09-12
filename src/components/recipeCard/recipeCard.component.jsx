import React from "react";
import { RecipeContainer } from "./recipeCard.style";

const RecipeCard = ({ recipe }) => {
  const { name, description, cuisine } = recipe;
  return (
    <RecipeContainer>
      <div>{name}</div>
      <p>{cuisine}</p>
      <p>{description}</p>
      <p>View More</p>
    </RecipeContainer>
  );
};

export default RecipeCard;
