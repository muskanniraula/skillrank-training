import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import RecipeModal from '../components/RecipeModal';
import SearchBar from '../components/SearchBar';
import '../Styles/home.css';
import '../Styles/SkeletonLoader.css';

const HomePage = ({ favorites, toggleFavorite }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="home_body">
      <h1>Recipes</h1>
      <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

      {loading ? (
        <div className="skeleton-container">
          {[...Array(5)].map((_, index) => (
            <div className="skeleton-item" key={index}></div>
          ))}
        </div>
      ) : (
        <div className="recipes-container">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={() => setSelectedRecipe(recipe)}
              isFavorite={favorites.some((fav) => fav.id === recipe.id)}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}

      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
};

export default HomePage;
