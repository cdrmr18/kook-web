import { SET_RECIPES } from "./recipesTypes";

const INITIAL_STATE = {
  recipesMap: {},
};

export const recipesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_RECIPES:
      return {
        ...state,
        recipesMap: payload,
      };
    default:
      return state;
  }
};
