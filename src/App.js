import TopList from "./components/recipiesList/recipesList.component";
import HomeBanner from "./components/homeBanner/homeBanner.component";
import { recipes } from "./recipesData";
import { chefs } from "./chefData";

import "./App.css";

function App() {
  return (
    <div className="App-container">
      <HomeBanner />
      <TopList title="Recipes" data={recipes} />
      <TopList title="Chefs" data={chefs} />
    </div>
  );
}

export default App;
