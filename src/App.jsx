import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainView from './common/containers/main-view/MainView';
import Contact from './sections/contact/Contact';
import Home from './sections/home/Home';

import { MAIN_ROUTING } from './common/constants/routing.const';

import './app.scss';


function App() {
  return (
    <BrowserRouter>
      <MainView>
        <Switch>
          <Route exact path={MAIN_ROUTING.HOME} component={Home} />
          <Route exact path={MAIN_ROUTING.CONTACT} component={Contact} />
        </Switch>
      </MainView>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
