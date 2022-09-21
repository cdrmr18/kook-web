import { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebaseUtils";

// actual value to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

// user action type
export const SET_CURRENT_USER = "SET_CURRENT_USER";
// reducer for user
const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
// reducer initial value
const INITIAL_VALUE = {
  currentUser: null,
};
//  actual component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_VALUE);

  const { currentUser } = state;

  const setCurrentUser = (user) => {
    dispatch({ type: SET_CURRENT_USER, payload: user });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
