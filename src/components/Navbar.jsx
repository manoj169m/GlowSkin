import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4  container-fluid">
      {/* Left: Logo */}
      <a className="navbar-brand" href="#">
        <img
          src="/grohairlogo-png.webp" // Replace with your image/logo
          alt="Logo"
          width="100%"
          height="100%"
          className="d-inline-block align-top"
        />
      </a>

      {/* Toggle button for mobile */}
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

      {/* Center: Nav Links */}
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item mx-2 ">
            <a className="nav-link" href="#home">Home</a>
            
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#services">Services</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#FAQs">FAQs</a>
          </li>
        </ul>
      </div>

      {/* Right: Book Now Button */}
      <div className="d-none d-lg-block">
  <button
    className="btn btn-danger"
    onClick={() => {
      const section = document.getElementById('bookappoinment');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }}
  >
    Book Now
  </button>
</div>

    </nav>
  );
}
