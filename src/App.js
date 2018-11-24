import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainView from "./common/containers/main-view/MainView";
import Contact from "./sections/contact/Contact";
import Home from "./sections/home/Home";

import "./app.scss";

// const HelloWorld = () => 'Hello world';
let x;

// @todo fn component
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainView>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </MainView>
      </BrowserRouter>
    );
  }
}
