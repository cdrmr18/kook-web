import { SET_RECIPES } from "./recipesTypes";

export const setRecipesMap = (recipes) => {
  return { type: SET_RECIPES, payload: recipes };
};
