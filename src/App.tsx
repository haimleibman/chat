import React from 'react';
import css from './App.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './home/Home';

function App() {
  return (
    <div className={css.App}>
      <Router>
          <Switch>
            <Route path="/Coach" component={() => <></>} />
            <Route exact path="/" component={Home} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
