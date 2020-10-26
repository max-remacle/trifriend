import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isAuthenticated } from 'authenticare/client/auth'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Warzone from "./Warzone";

const App = () => { 
  return (
    <>
      <Route path="/" component={Nav} />
      <Route
        path="/login"
        render={({ history }) => {
          return isAuthenticated() ? (
            <Redirect to="/" />
          ) : (
            <Login history={history} />
          );
        }}
      />
      <Route
        path="/register"
        render={({ history }) => {
          return isAuthenticated() ? (
            <Redirect to="/" />
          ) : (
            <Register history={history} />
          );
        }}
      />
      <Route exact path="/warzone" component={Warzone} />
    </>
  );
};

export default App;
