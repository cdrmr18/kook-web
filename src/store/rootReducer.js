import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { chefsReducer } from "./chefs/chefsReducer";
export const rootReducer = combineReducers({
  user: userReducer,
  chefs: chefsReducer,
});
