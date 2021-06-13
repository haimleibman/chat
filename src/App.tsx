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
      <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path={process.env.PUBLIC_URL +"/training"} >
              <Training></Training>
            </Route>
            <Route exact path={process.env.PUBLIC_URL + "/"} >
              <Home/>
            </Route>
            <Route exact path={process.env.PUBLIC_URL + "/*"} >
              <Redirect to={process.env.PUBLIC_URL + "/"} />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
