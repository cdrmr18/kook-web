import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebaseUtils";
import { setCurrentUser } from "./store/user/userActions";

import Recipes from "./routes/recipes/recipes.component";
import Checkout from "./routes/checkout/checkout.component";
import Authentication from "./routes/authentication/authentication.component";
import Home from "./routes/home/home/home.component";
import NavBar from "./routes/navbar/navbar.component";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/recipes/*" element={<Recipes />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sign-in" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
