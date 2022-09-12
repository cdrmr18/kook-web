import React from "react";

const RecipeCard = ({ recipe }) => {
  const { name, description, cuisine } = recipe;
  return (
    <div className="recipe-card">
      <div>{name}</div>
      <p>{cuisine}</p>
      <p>{description}</p>
      <p>View More</p>
    </div>
  );
};

export default RecipeCard;
