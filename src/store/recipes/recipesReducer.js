import { SET_RECIPES } from "./recipesTypes";

const INITIAL_STATE = {
  recipes: [],
};

export const recipesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_RECIPES:
      return {
        ...state,
        recipes: payload,
      };
    default:
      return state;
  }
};
