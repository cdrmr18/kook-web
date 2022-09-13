import React from "react";
import { TopCardContainer } from "./recipeCard.style";

const TopCard = ({ data }) => {
  const { name, description, cuisine } = data;
  return (
    <TopCardContainer>
      <div>{name}</div>
      <p>{cuisine}</p>
      {description}
      <p>View More</p>
    </TopCardContainer>
  );
};

export default TopCard;
