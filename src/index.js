import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { RecipesProvider } from "./context/recipes.context";
import { ChefsProvider } from "./context/chefs.context";
import { CartProvider } from "./context/cart.context";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider>
          <RecipesProvider>
            <ChefsProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </ChefsProvider>
          </RecipesProvider>
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
