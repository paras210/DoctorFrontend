import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-xxl">
          <Link className="navbar-brand fs-3" to="/">
            <img src={logo} alt="Logo" width="35" height="35" className="d-inline-block align-text-top mx-2" />
            DoctorApp
          </Link>
        </div>
      </nav>
    </div>
  );
}
