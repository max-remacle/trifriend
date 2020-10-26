import React from "react";
import { Redirect, Route, Link, Switch } from "react-router-dom";
import { isAuthenticated } from "authenticare/client/auth";
import { IfNotAuthenticated, IfAuthenticated } from "./Authenticated";

import Warzone from "./Warzone";
import Login from "./Login";
import Register from "./Register";

const App = () => {

  const handleClick = () => {
    logOff();
    if (!isAuthenticated()) {F
      props.history.push("/");
    }
  };  
  return (
    <>
      <h1>Trifriend</h1>
      <ul>
        <IfNotAuthenticated>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/login">
            <li>Log In</li>
          </Link>
          <Link to="/register">
            <li>Register</li>
          </Link>
        </IfNotAuthenticated>
        <IfAuthenticated>
          <h2>Authenticateds</h2>
          <button onClick={handleClick}>Log off</button>

          <Switch></Switch>
        </IfAuthenticated>
        <Route
          exact
          path="/login"
          render={({ history }) => {
            return isAuthenticated() ? (
              <Redirect to="/dashboard" />
            ) : (
              <Login history={history} />
            );
          }}
        />
        <Route
          exact
          path="/register"
          render={({ history }) => {
            return isAuthenticated() ? (
              <Redirect to="/dashboard" />
            ) : (
              <Register history={history} />
            );
          }}
        />
        <Route exact path="/warzone" component={Warzone} />
      </ul>
    </>
  );
};

export default App;
