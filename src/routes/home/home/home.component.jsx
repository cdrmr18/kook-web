import React from "react";
import TopList from "../topList/topList.component";
import HomeBanner from "../homeBanner/homeBanner.component";
import RECIPES from "../../../recipes";
import CHEFS from "../../../chefs.js";

const Home = () => {
  return (
    <div className="home-container">
      <HomeBanner />
      <TopList title="Recipes" data={RECIPES} />
      <TopList title="Chefs" data={CHEFS} />
    </div>
  );
};

export default Home;
