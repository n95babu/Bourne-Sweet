import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'


function Nav() {
  return (
    <nav>
      <h3>logo</h3>
      <ul className='nav-links'>
        <Link to='/about'>
          <li>About</li>
        </Link>

        <Link to='/contact'>
          <li>Contact</li>
        </Link>

        <Link to='/sweets'>
          <li>Sweets</li>
        </Link>

      </ul>
    </nav>
  );
}

export default Nav;