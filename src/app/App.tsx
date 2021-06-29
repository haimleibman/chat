import React from 'react';
import css from './App.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Chat from '../chat/Chat';
import Login from '../login/Login';
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <div className={css.App}>
      <RecoilRoot>
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route path="/myRoom" >
                <Chat/>
              </Route>
              <Route exact path="/" >
                <Login/>
              </Route>
              <Route exact path="/*" >
                <Redirect to="/" />
              </Route>
            </Switch>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
