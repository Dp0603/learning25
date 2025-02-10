import React from 'react';
import "../assets/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Navbar</div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
