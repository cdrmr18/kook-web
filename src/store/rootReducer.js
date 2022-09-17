import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { chefsReducer } from "./chefs/chefsReducer";
import { recipesReducer } from "./recipes/recipesReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  chefs: chefsReducer,
  recipes: recipesReducer,
});
