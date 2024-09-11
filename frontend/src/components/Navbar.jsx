import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo2.webp';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status on component mount
    const checkAuthStatus = () => {
      const accessToken = localStorage.getItem('accessToken');
      setIsLoggedIn(!!accessToken); // Update login state based on token presence
    };

    checkAuthStatus();
  }, []); // Empty dependency array to run only on mount

  const handleSignOut = () => {
    localStorage.clear(); // Clear all localStorage data
    setIsLoggedIn(false); // Update state to reflect user is logged out
    navigate('/login'); // Redirect to the login page
  };

  return (
    <nav className="navbar navbar-expand-lg color1">
      <div className="container-xxl color1">
        <Link className="navbar-brand fs-3 text-light" to="/">
          <img src={logo} alt="Logo" width="35" height="35" className="d-inline-block align-text-top mx-2" />
          <b>MediLocate</b>
        </Link>

        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
          <li className="nav-item">
                  <Link className="btn btn-light mx-2" to="/appointments">My Appointments</Link>
                </li>
            {isLoggedIn ? (
              <>
                
                <li className="nav-item">
                  <button className="btn btn-light mx-2" onClick={handleSignOut}>Sign Out</button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="btn btn-light mx-2" to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
