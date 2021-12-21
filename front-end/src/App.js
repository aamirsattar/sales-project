import React from 'react';
import Login from './components/login'
import Register from './components/register'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

  function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Register />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>

    );
}

export default App;