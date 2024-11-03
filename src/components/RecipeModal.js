import React from 'react';
import '../Styles/home.css';

const RecipeModal = ({ recipe, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.title} />
        <div className="modal-details">
          <div className="ingredients">
            <h4>Ingredients:</h4>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="instructions">
            <h4>Instructions:</h4>
            <p>{recipe.instructions}</p>
          </div>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RecipeModal;
