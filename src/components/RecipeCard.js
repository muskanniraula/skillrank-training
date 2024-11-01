import React from 'react';
import '../home.css';

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div className="recipe-card" onClick={() => onClick(recipe)}>
      <h3>{recipe.name}</h3>
      <img src={recipe.image} alt={recipe.title} />
    </div>
  );
};

export default RecipeCard;
