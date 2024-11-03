import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import '../Styles/home.css';

const RecipeCard = ({ recipe, onClick, isFavorite, toggleFavorite }) => {
  return (
    <div className="recipe-card" onClick={onClick}>
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <div className="favorite-icon" onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(recipe);
        }}>
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </div>
    </div>
  );
};

export default RecipeCard;
