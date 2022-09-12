import RecipiesList from "./components/recipiesList/recipesList.component";
import HomeBanner from "./components/homeBanner/homeBanner.component";
import "./App.css";

function App() {
  return (
    <div className="App-container">
      <HomeBanner />
      <RecipiesList />
    </div>
  );
}

export default App;
