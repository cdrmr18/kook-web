import React from "react";
import RecipeCard from "../recipeCard/recipeCard.component";
import { recipes } from "../../recipesData";

const RecipiesList = () => {
  return (
    <div className="recipes-container">
      <div className="recipes-header">Tope Recipes</div>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipiesList;
