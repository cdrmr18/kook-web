import { SET_CHEFS } from "./chefsTypes";

export const CHEFS_INITIAL_STATE = {
  chefs: [],
};

export const chefsReducer = (state = CHEFS_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CHEFS:
      return { ...state, chefs: payload };
    default:
      return state;
  }
};
