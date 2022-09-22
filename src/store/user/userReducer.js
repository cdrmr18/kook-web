import {
  SET_CURRENT_USER,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  LOGIN_FAILED,
  SIGN_UP_FAILED,
} from "./userTypes";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    case LOGIN_SUCCESS:
      return { ...state, currentUser: payload };
    case LOGOUT_SUCCESS:
      return { ...state, currentUser: null };
    case SIGN_UP_FAILED:
    case LOGOUT_FAILED:
    case LOGIN_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};
