import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'
import logo from '../bsweet.png'

const Nav = () => {
  return (
    <nav>
      <h3><img src={logo} className='bsweet_logo' alt="Logo" /></h3>
      <ul className='nav-links'>
        <Link to='/about'>
          <li>About</li>
        </Link>

        <Link to='/contact'>
          <li>Contact</li>
        </Link>

        <Link to='/Sweets'>
          <li>Sweets</li>
        </Link>

      </ul>
    </nav>
  );
}

export default Nav;