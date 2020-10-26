import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { IfNotAuthenticated, IfAuthenticated } from "./Authenticated";
import { logOff, isAuthenticated } from "authenticare/client";


const Nav = (props) => {
  
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

          <Switch>

          </Switch>
        </IfAuthenticated>
      </ul>
      </>
  );
};

export default Nav;