import { useState } from 'react';
import './App.css';

function App() {
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
        </div>
      ) : (
        <h1>Welcome, {username}!</h1>
      )}
    </div>
  );
}

export default App;
