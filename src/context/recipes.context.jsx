import { createContext, useEffect, useReducer } from "react";
import { getRecipesAndDocuments } from "../utils/firebase/firebaseUtils";

export const RecipesContext = createContext({
  recipesMap: {},
});

const INITIAL_STATE = {
  recipesMap: {},
};

export const SET_RECIPES = "SET_RECIPES";

const recipesReducer = (state, action) => {
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

export const RecipesProvider = ({ children }) => {
  const [{ recipesMap }, dispatch] = useReducer(recipesReducer, INITIAL_STATE);

  const setRecipesMap = (recipes) => {
    dispatch({ type: SET_RECIPES, payload: recipes });
  };

  useEffect(() => {
    const getRecipesMap = async () => {
      const recipes = await getRecipesAndDocuments();
      setRecipesMap(recipes);
    };
    getRecipesMap();
  }, []);

  const value = { recipesMap };

  return (
    <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>
  );
};
