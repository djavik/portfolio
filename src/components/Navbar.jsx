import React from 'react';
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">about</a></li>
        <li><a href="/about">experience</a></li>
        <li><a href="/contact">showcase</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
