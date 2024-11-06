import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/TopBar.css';

const TopBar = () => (
  <div className="topbar">
    <Link to="/home" className="nav-link">Home</Link>  {/* Change this to /home */}
    <Link to="/favourites" className="nav-link">Favourites</Link>
  </div>
);

export default TopBar;
