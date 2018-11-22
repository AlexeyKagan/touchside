import React from 'react';
import PropTypes from 'prop-types';

function Header({ children }) {
  return (
    <div className="header">
      { children }
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
