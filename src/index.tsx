import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Lives from './components/Lives';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Link to="/lives"><p>Lives</p></Link>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/lives">
          <Lives />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
