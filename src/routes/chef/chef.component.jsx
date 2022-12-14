import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getRecipes } from "../../store/recipes/recipesSelector";
import { getChefs } from "../../store/chefs/chefsSelector";

const Chef = () => {
  const chefs = useSelector(getChefs);
  const recipes = useSelector(getRecipes);
  const { chef } = useParams();

  const [recipesArr, setRecipes] = useState(recipes[chef]);

  useEffect(() => {
    setRecipes(recipes[chef]);
  }, [chef, recipes]);

  const mainChef = chefs.find((chefEle) => chefEle.chef.toLowerCase() === chef);

  return (
    <div>
      <div>{mainChef && mainChef.info[0].name}</div>
      <div>
        {recipesArr &&
          recipesArr.map((recipe) => <h1 key={recipe.id}>{recipe.name}</h1>)}
      </div>
    </div>
  );
};

export default Chef;
