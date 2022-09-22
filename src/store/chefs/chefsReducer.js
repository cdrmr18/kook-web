import { SET_CHEFS } from "./chefsTypes";

export const CHEFS_INITIAL_STATE = {
  chefsMap: [],
};

export const chefsReducer = (state = CHEFS_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CHEFS:
      return { ...state, chefsMap: payload };
    default:
      return state;
  }
};
