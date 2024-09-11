import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    const signinRequest = {
      userName: userName,
      password: password
    };

    try {
      const response = await fetch('https://medilocate-2-0.onrender.com/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signinRequest),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      // alert('Login successful!');
      navigate('/'); // Redirect to the home page after successful login
    } catch (err) {
      setError(err.message || 'Something went wrong');
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4" style={{ fontFamily: 'Arial, sans-serif', color: '#343a40' }}>Login</h2>
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
