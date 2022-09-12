import React, { Fragment } from "react";
import RecipeCard from "../recipeCard/recipeCard.component";
import { recipes } from "../../recipesData";
import { RecipesContainer, RecipesHeader } from "./recipiesList.style";

const RecipiesList = () => {
  return (
    <Fragment>
      <RecipesHeader>Top Recipes</RecipesHeader>
      <RecipesContainer>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </RecipesContainer>
    </Fragment>
  );
};

export default RecipiesList;
