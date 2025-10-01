import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
  return (

<nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 shadow-sm">
  <div className="container">
    {/* Brand */}
    <a className="navbar-brand fw-bold" href="#"><FontAwesomeIcon icon={faCoffee} /> MyBrand</a>

    {/* Mobile Toggler */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Navbar Links */}
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav w-100 d-flex justify-content-evenly">
        <li className="nav-item">
          <a className="nav-link nav-hover px-3 rounded" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-hover px-3 rounded" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-hover px-3 rounded" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-hover px-3 rounded" href="#">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


  );
}
export default Navbar;