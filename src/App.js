import { Routes, Route } from "react-router-dom";
import Recipes from "./routes/recipes/recipes.component";
import Chefs from "./routes/chefs/chefs.component";
import Bookings from "./routes/bookings/bookings.component";
import SignIn from "./routes/SignIn/signIn.component";
import SignOut from "./routes/SignOut/signOut.component";
import Home from "./routes/home/home/home.component";
import NavBar from "./routes/navbar/navbar.component";
import Dashboard from "./routes/dashboard/dashboard.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-out" element={<SignOut />} />
      </Route>
    </Routes>
  );
}

export default App;
