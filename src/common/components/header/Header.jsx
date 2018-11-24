import React from 'react';
import PropTypes, { string } from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

import './header.scss';

function Header(props) {
  const { location: { pathname } } = props;

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
          <Nav.Link active={pathname === '/'} as={Link} className="header__link" to="/">Home</Nav.Link>
          <Nav.Link active={pathname === '/people'} className="header__link">People</Nav.Link>
          <Nav.Link active={pathname === '/contact'} as={Link} className="header__link" to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

Header.propsType = {
  location: PropTypes.shape({
    pathname: string.isRequired,
  }).isRequired,
};

export default withRouter(Header);
