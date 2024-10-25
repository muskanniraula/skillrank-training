import React, { useEffect, useState } from 'react';
import './home.css';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div>
      <h1>Recipes</h1>
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <h3>{recipe.name}</h3>
            <img src={recipe.image} alt={recipe.title} />
            <h4>Ingredients:</h4>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h4>Instructions:</h4>
            <p className="instructions">{recipe.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
