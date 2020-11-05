import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { signIn, isAuthenticated } from 'authenticare/client'
import { baseApiUrl as baseUrl } from '../config'
import {setUserInfo} from '../actions'

// Email = Username as authenticare requires a username field

const Login = (props) => {
  // useEffect(() => {

  // }, [props.location])

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const handleClick = event => {
    event.preventDefault()
    const { email, password } = user

    signIn({ username: email, password }, { baseUrl })
      .then((token) => {
        props.dispatch(setUserInfo(token))
        if (isAuthenticated()) {
          console.log('Logged in')
          props.history.push('/dashboard')
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div >
      <form onSubmit={handleClick}>
        <label htmlFor="email">Email Address</label>
        <input type="email" id='email' name="email" placeholder='Email Address' value={user.username} onChange={handleChange}></input>
        <label htmlFor="password">Password</label>
        <input type="password" id='password' name="password" placeholder="Password" value={user.password} onChange={handleChange} ></input>
        <button type='submit' onClick={handleClick}>Sign-In</button>
      </form>
    </div>
  )
}


const mapStateToProps = (state)=>{
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Login)