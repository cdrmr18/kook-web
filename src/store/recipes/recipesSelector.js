import { createSelector } from "reselect";

export const getRecipes = createSelector(
  (state) => state.recipes.recipes,
  (recipes) =>
    recipes.reduce((acc, recipe) => {
      const { chef, recipes } = recipe;
      acc[chef.toLowerCase()] = recipes;
      return acc;
    }, {})
);
