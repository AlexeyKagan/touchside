import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './header.scss';

// @TODO constat for routing?

function Header() {
  return (
    <Navbar className="header" collapseOnSelect expand="sm" variant="dark">
      <Navbar.Toggle className="header__toggle" aria-controls="responsive-navbar-nav">
        <span className="header__toggle-icon" />
      </Navbar.Toggle>

      <Navbar.Brand className="header__brand" href="/home">
        <div className="header-brand">
          <div className="header-brand__stick" />
        </div>
      </Navbar.Brand>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} className="header__link" to="/">Home</Nav.Link>
          <Nav.Link as={Link} className="header__link" to="/people">People</Nav.Link>
          <Nav.Link as={Link} className="header__link" to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default Header;
