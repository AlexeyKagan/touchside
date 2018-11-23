import React, { Component } from 'react';
import './app.scss';

import MainView from './containers/MainView';

import Contact from './sections/contact/Contact';


export default class App extends Component {
  render() {
    return (
      <div className="app">
        <MainView>
          <Contact />
        </MainView>
      </div>
    );
  }
}
