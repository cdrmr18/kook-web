import { createContext, useState, useEffect } from "react";
import { getRecipesAndDocuments } from "../utils/firebase/firebaseUtils";

export const RecipesContext = createContext({
  recipesMap: {},
});

export const RecipesProvider = ({ children }) => {
  const [recipesMap, setRecipesMap] = useState({});

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
