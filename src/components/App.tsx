import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Lives from './Lives';
import CourceChoice from './CourceChoice';
import BackgroungAnimation from './BackgroundAnimation';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/lives">
          <Lives />
        </Route>
        <Route path="/rescue">
          <CourceChoice />
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
