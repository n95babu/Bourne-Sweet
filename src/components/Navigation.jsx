import React from 'react';
// import './Custom.css'
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from '../assets /bsweet.png'




const Navigation = () => {
  return (
    <>
      <Navbar bg="light" expand="sm" >
        <Navbar.Brand href="/">
          <img
            src={logo}
            className='bsweet_logo'
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >
          <Nav pullRight >
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="Sweets" id="basic-nav-dropdown">
              <Link to='/desserts'>
                <NavDropdown.Item href="/desserts">desserts</NavDropdown.Item>
              </Link>
              <Link to='/pies'>
                <NavDropdown.Item href="/pies">pies</NavDropdown.Item>
              </Link>
              <Link to='/cakes'>
                <NavDropdown.Item >cakes</NavDropdown.Item>
              </Link>
              <Link to='/cookies'>
                <NavDropdown.Item href="/cookies">cookies</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    </>

  );
}



export default Navigation;