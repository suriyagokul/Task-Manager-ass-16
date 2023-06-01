import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authenticateUser(email, password);
  };

  const authenticateUser = (email, password) => {
    // Simulate authentication success, replace with your actual authentication logic
    const isAuthenticated = true;

    if (isAuthenticated) {
      // Redirect user to the task dashboard upon successful login
      navigate('/task-dashboard'); // Replace with the actual task dashboard route
    } else {
      // Handle authentication failure if needed
      console.error('Authentication failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
