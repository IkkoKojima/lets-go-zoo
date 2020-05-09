import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Lives from './Lives';
import BackgroungAnimation from './BackgroundAnimation';
import Menus from './Menus';

function App() {
  return (
    <div>
      <Menus />
      <Switch>
        <Route path="/lives">
          <Lives />
        </Route>
        <Route path="/">
          <Redirect to="/lives" />
        </Route>
      </Switch>
      <BackgroungAnimation />
    </div>
  );
}

export default App;
