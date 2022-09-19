import { Routes, Route } from "react-router-dom";
import Recipes from "./routes/recipes/recipes.component";
import Chefs from "./routes/chefs/chefs.component";
import Checkout from "./routes/checkout/checkout.component";
import Authentication from "./routes/authentication/authentication.component";
import Home from "./routes/home/home/home.component";
import NavBar from "./routes/navbar/navbar.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sign-in" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
