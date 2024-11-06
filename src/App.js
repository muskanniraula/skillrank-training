import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './Pages/home';
import FavouritesPage from './components/FavouritesPage';
import LoginPage from './Pages/login';
import SignupPage from './Pages/signup';
import TopBar from './components/TopBar';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const toggleFavorite = (recipe) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === recipe.id);
      return isFavorite
        ? prevFavorites.filter((fav) => fav.id !== recipe.id)
        : [...prevFavorites, recipe];
    });
  };

  const location = useLocation();
  const navigate = useNavigate();  


  const showTopBar = location.pathname === '/home' || location.pathname === '/favourites';

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/home');
  };

  return (
    <>
      {showTopBar && <TopBar />} 
      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/signup"} />} /> 

        
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

       
        {isAuthenticated ? (
          <>
            <Route path="/home" element={<HomePage favorites={favorites} toggleFavorite={toggleFavorite} />} />
            <Route path="/favourites" element={<FavouritesPage favorites={favorites} toggleFavorite={toggleFavorite} />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
