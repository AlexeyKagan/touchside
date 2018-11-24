import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainView from './common/containers/main-view/MainView';
import Contact from './sections/contact/Contact';
import Home from './sections/home/Home';

import './app.scss';

function App() {
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

export default App;
