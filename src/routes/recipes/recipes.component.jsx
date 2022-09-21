import React from "react";
import { Routes, Route } from "react-router-dom";
import RecipesPreview from "../../components/recipesPreview/recipesPreview.component";
import Chef from "../chef/chef.component";

const Recipes = () => {
  return (
    <Routes>
      <Route index element={<RecipesPreview />}></Route>
      <Route path=":chef" element={<Chef />}></Route>
    </Routes>
  );
};

export default Recipes;
