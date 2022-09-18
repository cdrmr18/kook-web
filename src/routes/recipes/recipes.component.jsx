import React, { Fragment, useContext } from "react";
import { RecipesContext } from "../../context/recipes.context";

const Recipes = () => {
  const { recipesMap } = useContext(RecipesContext);
  return (
    <Fragment>
      {Object.keys(recipesMap).map((title) => (
        <Fragment>
          {recipesMap[title].map((recipe) => (
            <h2 key={recipe.id}>{recipe.name}</h2>
          ))}
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Recipes;
