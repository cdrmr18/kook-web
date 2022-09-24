import { combineReducers } from "redux";

import { userReducer } from "./user/userReducer";
import { chefsReducer } from "./chefs/chefsReducer";
import { recipesReducer } from "./recipes/recipesReducer";
import { cartReducer } from "./cart/cartReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  chefs: chefsReducer,
  recipes: recipesReducer,
  cart: cartReducer,
});
