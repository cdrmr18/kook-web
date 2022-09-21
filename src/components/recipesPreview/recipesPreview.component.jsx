import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
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
            <Link to={`${title}`}>
              <RecipesTitle key={title}>{title}</RecipesTitle>
            </Link>
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
