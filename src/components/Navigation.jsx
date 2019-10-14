import React from 'react';
import './Nav.css'
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

        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse className="collapse navbar-collapse justify-content-end">
          <Nav >
            <Nav.Link href="/about">OUR STORY</Nav.Link>

            <NavDropdown title="SWEETS" id="basic-nav-dropdown">
              {/* <Link to='/desserts' > */}
              <NavDropdown.Item href="/desserts">DESSERTS</NavDropdown.Item>
              {/* </Link> */}
              {/* <Link to='/pies'> */}
              <NavDropdown.Item href="/pies">PIES</NavDropdown.Item>
              {/* </Link> */}
              {/* <Link to='/cakes'> */}
              <NavDropdown.Item href="/cakes">CAKES</NavDropdown.Item>
              {/* </Link> */}
              {/* <Link to='/cookies'> */}
              <NavDropdown.Item href="/cookies">COOKIES</NavDropdown.Item>
              {/* </Link> */}
            </NavDropdown>
            <Nav.Link href="/contact">CONNECT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar >

    </>

  );
}



export default Navigation;