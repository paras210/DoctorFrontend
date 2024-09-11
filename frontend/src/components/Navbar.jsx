import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo2.webp';

export default function Navbar() {
  // Replace with actual user authentication logic
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Simulate fetching user authentication status
    // Replace with your actual authentication check
    const checkAuthStatus = () => {
      // Example logic: replace with real authentication check
      const userAuth = true; // or false based on actual logic
      setIsLoggedIn(userAuth);
    };

    checkAuthStatus();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg color1">
      <div className="container-xxl color1">
        <Link className="navbar-brand fs-3 text-light" to="/">
          <img src={logo} alt="Logo" width="35" height="35" className="d-inline-block align-text-top mx-2" />
          <b>HealthLink</b>
        </Link>

        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link text-light">
                <i className="bi bi-telephone-fill me-2"></i>Emergency: 911
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link text-light">General Queries: 123-456-7890</span>
            </li>
            {isLoggedIn && (
              <li className="nav-item">
                <Link className="btn btn-light mx-2" to="/appointments">My Appointments</Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="btn btn-light mx-2" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
