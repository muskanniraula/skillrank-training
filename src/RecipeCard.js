import React from 'react';

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div className="recipe-card" onClick={onClick}>
      <h3>{recipe.name}</h3>
      <img src={recipe.image} alt={recipe.title} />
    </div>
  );
};

export default RecipeCard;
