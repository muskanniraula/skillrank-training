import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPasswordCriteria, setShowPasswordCriteria] = useState(false);

  const checkPasswordCriteria = (newPassword) => {
    return {
      length: newPassword.length >= 8,
      upperCase: /[A-Z]/.test(newPassword),
      lowerCase: /[a-z]/.test(newPassword),
      number: /[0-9]/.test(newPassword),
      punctuation: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
    };
  };

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

  const passwordCriteria = checkPasswordCriteria(password);

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
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
          onFocus={() => setShowPasswordCriteria(true)}
          onBlur={() => setShowPasswordCriteria(false)}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        {/* displaying criteria only when password textfield is clicked */}
        {showPasswordCriteria && (
          <div className="password-criteria">
            <p className={passwordCriteria.length ? 'valid' : 'invalid'}>✔ At least 8 characters</p>
            <p className={passwordCriteria.upperCase ? 'valid' : 'invalid'}>✔ Uppercase letter</p>
            <p className={passwordCriteria.lowerCase ? 'valid' : 'invalid'}>✔ Lowercase letter</p>
            <p className={passwordCriteria.number ? 'valid' : 'invalid'}>✔ Number</p>
            <p className={passwordCriteria.punctuation ? 'valid' : 'invalid'}>✔ Punctuation (e.g., !, @, #, $)</p>
          </div>
        )}

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        <button type="submit">Sign Up</button>

        <p className="login-link">
          Already have an account?{' '}
          <span className="login-link-id" onClick={() => navigate('/login')}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
