import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './header.scss';

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
          <Nav.Link className="header__link" href="/home">Home</Nav.Link>
          <Nav.Link className="header__link" href="/people">People</Nav.Link>
          <Nav.Link className="header__link" href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default Header;
