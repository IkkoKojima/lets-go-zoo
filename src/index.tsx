import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Lives from './components/Lives';
import Header from './components/Header'
import 'normalize.css'
import Background from './components/Background';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Background>
        <Header />
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/lives">
            <Lives />
          </Route>
        </Switch>
      </Background>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
