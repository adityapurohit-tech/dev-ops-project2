import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Redirect to login page if the page is reloaded
  useEffect(() => {
    navigate('/'); // Redirect to the login page on initial render
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); // Clear previous error messages

    // Password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    
    // Check if username and password are provided
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Check if the password meets the required criteria
    if (!passwordPattern.test(password)) {
      setError('Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.');
      return;
    }

    // Simulate login success and redirect
    navigate('/welcome');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>IT Company Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required // Make it a required field
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required // Make it a required field
            />
          </div>
          {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
