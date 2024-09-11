import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo2.webp';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    
    const checkAuthStatus = () => {
     
      const userAuth = true; 
      setIsLoggedIn(userAuth);
    };

    checkAuthStatus();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg color1">
      <div className="container-xxl color1">
        <Link className="navbar-brand fs-3 text-light" to="/">
          <img src={logo} alt="Logo" width="35" height="35" className="d-inline-block align-text-top mx-2" />
          <b>MediLocate</b>
        </Link>

        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            
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
