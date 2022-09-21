import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ChefsContext } from "../../context/chefs.context";
import { RecipesContext } from "../../context/recipes.context";

const Chef = () => {
  const { chefsMap } = useContext(ChefsContext);
  const { recipesMap } = useContext(RecipesContext);
  const { chef } = useParams();

  const [recipes, setRecipes] = useState(recipesMap[chef]);

  useEffect(() => {
    setRecipes(recipesMap[chef]);
  }, [chef, recipesMap]);

  const mainChef = chefsMap.find(
    (chefEle) => chefEle.chef.toLowerCase() === chef
  );

  return (
    <div>
      <div>{mainChef && mainChef.info[0].name}</div>
      <div>
        {recipes &&
          recipes.map((recipe) => <h1 key={recipe.id}>{recipe.name}</h1>)}
      </div>
    </div>
  );
};

export default Chef;
