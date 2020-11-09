import React, { useState } from "react";
import { connect } from 'react-redux'
import { register, isAuthenticated } from "authenticare/client";
import { baseApiUrl as baseUrl } from "../config";
import {setUserInfo} from '../actions'


function Register(props) {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = newUser;

    if (password === confirmPassword) {
      register({ firstName, lastName, username: email, password }, { baseUrl })
      .then((token) => {
        props.dispatch(setUserInfo(token))
        if (isAuthenticated()) {
          props.history.push("/dashboard");
        }
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <>
    <div>
      <input type='email' role='email' name='firstName' placeholder='Name' onChange={handleChange}></input>
      <input type='email' role='email' name='lastName' placeholder='Last Name' onChange={handleChange}></input>
      <input type='email' role='email' name='email' placeholder='example@gmail.com' onChange={handleChange}></input>
      <input type='password' role='password' name='password' placeholder='password' onChange={handleChange}></input>
      <input type='password' role='confirmPassword' name='confirmPassword' placeholder='confirm password' onChange={handleChange}></input>
      <button type="submit" onClick={submitHandler}>Register</button>
    </div>
    </>
  );
}

const mapStateToProps = (state)=>{
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Register);
