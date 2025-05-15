import React from 'react';
import MainMenu from './MainMenu';
import '../css/Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className='parallax-section'>
          <MainMenu />
          <div className='navbar-section'>
            <ul>
              <li><a href="/">about</a></li>
              <li><a href="/about">experience</a></li>
              <li><a href="/contact">showcase</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
