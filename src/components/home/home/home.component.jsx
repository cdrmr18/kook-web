import React from "react";
import TopList from "../topList/topList.component";
import HomeBanner from "../homeBanner/homeBanner.component";
import NavBar from "../../navbar/navbar.component";
import { recipes } from "../../../recipesData.js";
import { chefs } from "../../../chefData";

const Home = () => {
  return (
    <div className="App-container">
      <NavBar />
      <HomeBanner />
      <TopList title="Recipes" data={recipes} />
      <TopList title="Chefs" data={chefs} />
    </div>
  );
};

export default Home;
