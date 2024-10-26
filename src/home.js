import React, { useEffect, useState } from 'react';
import './home.css';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='home_body'>
      <h1>Recipes</h1>
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <div
            className="recipe-card"
            key={recipe.id}
            onClick={() => setSelectedRecipe(recipe)}
          >
            <h3>{recipe.name}</h3>
            <img src={recipe.image} alt={recipe.title} />
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <div className="modal-overlay" onClick={() => setSelectedRecipe(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedRecipe.name}</h2>
            <img src={selectedRecipe.image} alt={selectedRecipe.title} />
            <div className="modal-details">
              <div className="ingredients">
                <h4>Ingredients:</h4>
                <ul>
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="instructions">
                <h4>Instructions:</h4>
                <p>{selectedRecipe.instructions}</p>
              </div>
            </div>
            <button onClick={() => setSelectedRecipe(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
