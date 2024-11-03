import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/home';
import FavouritesPage from './components/FavouritesPage';
import TopBar from './components/TopBar';

function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (recipe) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === recipe.id);
      if (isFavorite) {
        return prevFavorites.filter((fav) => fav.id !== recipe.id);
      } else {
        return [...prevFavorites, recipe];
      }
    });
  };

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route
          path="/"
          element={<HomePage favorites={favorites} toggleFavorite={toggleFavorite} />}
        />
        <Route
          path="/favourites"
          element={<FavouritesPage favorites={favorites} toggleFavorite={toggleFavorite} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
