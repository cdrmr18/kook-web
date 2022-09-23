import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { getRecipes } from "../../store/recipes/recipesSelector";
import RecipeCard from "../../components/recipeCard/recipeCard.component";

import {
  RecipesPreviewContainer,
  RecipesTitle,
  Preview,
} from "./recipesPreview.styles";

const RecipesPreview = () => {
  const recipes = useSelector(getRecipes);

  return (
    <RecipesPreviewContainer>
      {Object.keys(recipes).map((title) => (
        <Fragment key={title}>
          <h2>
            <Link to={`${title}`}>
              <RecipesTitle>{title}</RecipesTitle>
            </Link>
          </h2>
          <Preview>
            {recipes &&
              recipes[title]
                .filter((_, idx) => idx < 4)
                .map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
          </Preview>
        </Fragment>
      ))}
    </RecipesPreviewContainer>
  );
};

export default RecipesPreview;
