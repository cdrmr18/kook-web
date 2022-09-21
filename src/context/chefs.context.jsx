import { createContext, useState, useEffect, useReducer } from "react";
import { getChefsAndDocuments } from "../utils/firebase/firebaseUtils";

export const ChefsContext = createContext({
  chefsMap: [],
});

const INITITAL_STATE = {
  chefsMap: [],
};

export const SET_CHEFS = "SET_CHEFS";

const chefsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CHEFS:
      return {
        ...state,
        chefsMap: payload,
      };
    default:
      return state;
  }
};

export const ChefsProvider = ({ children }) => {
  const [{ chefsMap }, dispatch] = useReducer(chefsReducer, INITITAL_STATE);

  const setChefsMap = (chefs) => {
    dispatch({ type: SET_CHEFS, payload: chefs });
  };

  useEffect(() => {
    const getChefsMap = async () => {
      const chefs = await getChefsAndDocuments();
      setChefsMap(chefs);
    };
    getChefsMap();
  }, []);

  const value = { chefsMap };

  return (
    <ChefsContext.Provider value={value}>{children}</ChefsContext.Provider>
  );
};
