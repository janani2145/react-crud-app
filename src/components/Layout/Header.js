import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="sm"  className="bg-opacity-75 shadow bg-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand text-decoration-none fw-bold">
          Crup Application
        </NavLink>
        <div className=''>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link text-decoration-none">
              Home
            </NavLink>
            <NavDropdown title="Hooks with API"  id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/form" className='text-decoration-none'>
                UseFormic
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/reducerform" className='text-decoration-none'>
                UseReducer
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
