import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

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
          <Redirect to={MAIN_ROUTING.HOME} />
        </Switch>
      </MainView>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
