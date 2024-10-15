import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate for redirection
import Login from './login';
import Signup from './signup';
import Home from './home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect the root ("/") to the signup page */}
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
