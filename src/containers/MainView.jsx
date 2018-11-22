import React from 'react';
import PropTypes from 'prop-types';
// import MainHeader from '../common/header/main/main-header';
// import Alert from '../common/components/alert/alert';

// import './main-view.scss';

export default function MainView({ children }) {
  return (
    <div className="main-view">
      {/*<MainHeader/> */ }
      {/*<Alert/> */ }
      { children }
    </div>
  );
}

MainView.propTypes = {
  children: PropTypes.element.isRequired,
};
