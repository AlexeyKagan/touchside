import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import './main-view.scss';


export default function MainView({ children }) {
  return (
    <div className="main-view">
      <Header />
      <main>
        { children }
      </main>
      <Footer />
    </div>
  );
}

MainView.propTypes = {
  children: PropTypes.element.isRequired,
};
