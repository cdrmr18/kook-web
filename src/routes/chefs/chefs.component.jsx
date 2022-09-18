import React, { useContext } from "react";
import { ChefsContext } from "../../context/chefs.context";

const Chefs = () => {
  const { chefsMap } = useContext(ChefsContext);

  return (
    <div>
      {chefsMap.map((chef) => (
        <h1 key={chef.id}>{chef.firstName}</h1>
      ))}
    </div>
  );
};

export default Chefs;
