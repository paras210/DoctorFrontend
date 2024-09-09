import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';

export default function Navbar() {
  return (
      <div>


      <nav className="navbar navbar-expand-lg  color1">
        <div className="container-xxl color1">
          <Link className="navbar-brand fs-3 text-light" to="/">
            <img src={logo} alt="Logo" width="35" height="35" className="d-inline-block align-text-top mx-2" />
            HealthLink
          </Link>
        </div>
      </nav>
    </div>
  );
}
