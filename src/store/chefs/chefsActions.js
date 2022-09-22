import { SET_CHEFS } from "./chefsTypes";

export const setChefsMap = (chefs) => {
  return { type: SET_CHEFS, payload: chefs };
};
