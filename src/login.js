import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (username && password) {
      setLoggedIn(true);
      navigate('/home');
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className="login-container">
      {!loggedIn ? (
        <div className="login-form">
          <h2>Login</h2>
          <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={handleUsernameChange} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={handlePasswordChange} 
          />
          <button onClick={handleLogin}>Login</button>

          <p className="signup-link">
            Don't have an account?{' '}
            <span className='signup-link-id' onClick={() => navigate('/signup')}>Sign Up</span>
          </p>
        </div>
      ) : (
        <h1>Welcome, {username}!</h1>
      )}
    </div>
  );
};

export default Login;
