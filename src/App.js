import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainView from './containers/MainView';
import Contact from './sections/contact/Contact';
import Home from './sections/home/Home';

import './app.scss';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainView>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </MainView>
      </BrowserRouter>
    );
  }
}