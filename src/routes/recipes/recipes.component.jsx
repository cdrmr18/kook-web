import React, { Fragment, useContext } from "react";
import RecipeCard from "../../components/recipeCard/recipeCard.component";
import { RecipesContext } from "../../context/recipes.context";
import { CategoryContainer } from "./recipes.styles";

const Recipes = () => {
  const { recipesMap } = useContext(RecipesContext);
  return (
    <Fragment>
      {Object.keys(recipesMap).map((title) => (
        <CategoryContainer>
          {recipesMap[title].map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </CategoryContainer>
      ))}
    </Fragment>
  );
};

export default Recipes;
