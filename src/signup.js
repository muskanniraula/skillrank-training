import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validateForm = () => {
    let formErrors = {};
    if (!username) formErrors.username = 'Username is required';
    if (!email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Email is invalid';
    }
    if (!password) formErrors.password = 'Password is required';
    if (password.length < 6) formErrors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword) formErrors.confirmPassword = 'Passwords do not match';
    return formErrors;
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
    
      alert('Sign-up successful!');
      navigate('/login');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={handleUsernameChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}
        
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={handleEmailChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={handlePasswordChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        
        <input 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        
        <button onClick={handleSignup}>Sign Up</button>

        <p className="login-link">
          Already have an account?{' '}
          <span className='login-link-id' onClick={() => navigate('/login')}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
