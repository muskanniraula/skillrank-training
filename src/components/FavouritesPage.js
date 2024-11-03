import React from 'react';
import RecipeCard from './RecipeCard';
import '../Styles/favouritesPage.css';

const FavouritesPage = ({ favorites, toggleFavorite }) => {
  return (
    <div className="favourites-body">
    <div className="favourites-container">
      <h1>Favourites</h1>
      <div className="recipes-container">
        {favorites.length > 0 ? (
          favorites.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={true}
              toggleFavorite={toggleFavorite}
            />
          ))
        ) : (
          <p>No favorite recipes added.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default FavouritesPage;
