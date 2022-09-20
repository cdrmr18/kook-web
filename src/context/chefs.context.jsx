import { createContext, useState, useEffect } from "react";
import { getChefsAndDocuments } from "../utils/firebase/firebaseUtils";
export const ChefsContext = createContext({
  chefsMap: [],
});

export const ChefsProvider = ({ children }) => {
  const [chefsMap, setChefsMap] = useState([]);

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
