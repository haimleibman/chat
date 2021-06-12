import React from 'react';
import css from './App.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './home/Home';
import Training from './training/Training';

function App() {
  return (
    <div className={css.App}>
      <Router>
          <Switch>
            <Route path="/training" >
              <Training></Training>
            </Route>
            <Route exact path="/" >
              <Home/>
            </Route>
            <Route exact path="/*" >
              <Redirect to="/" />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
