import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Lives from './Lives';
import Menus from './Menus';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import ParticleBG from './ParticleBG';

const useStyle = makeStyles((theme: Theme) => createStyles({
  div: {
    overflow: "hidden"
  },
}))

function App() {
  const classes = useStyle()
  return (
    <div className={classes.div}>
      <Menus />
      <Switch>
        <Route path="/lives">
          <Lives />
        </Route>
        <Route path="/">
          <Redirect to="/lives" />
        </Route>
      </Switch>
      <ParticleBG />
    </div>
  );
}

export default App;
