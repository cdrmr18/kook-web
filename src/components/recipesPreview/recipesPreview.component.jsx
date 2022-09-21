import React, { Fragment, useContext } from "react";
import RecipeCard from "../../components/recipeCard/recipeCard.component";
import { RecipesContext } from "../../context/recipes.context";
import {
  RecipesPreviewContainer,
  RecipesTitle,
  Preview,
} from "./recipesPreview.styles";

const RecipesPreview = () => {
  const { recipesMap } = useContext(RecipesContext);
  return (
    <RecipesPreviewContainer>
      {Object.keys(recipesMap).map((title) => (
        <Fragment>
          <h2>
            <RecipesTitle key={title}>{title}</RecipesTitle>
          </h2>
          <Preview key={title}>
            {recipesMap[title]
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
