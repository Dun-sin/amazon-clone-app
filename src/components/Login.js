import React, { useState } from 'react';
import '../css/Login.css';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const signIn = (event) => {
    event.preventDefault();

    // firebase signin stuffs
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth => {
      navigate('/');
      }))
      .catch(error => alert(error.message))
  }

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth)
        if (auth) {
          navigate('/');
        }
      })
      .catch(error => alert(error.message));
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Amazon pic"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={event => setEmail(event.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={event => setPassword(event.target.value)} />

          <button type="submit" onClick={signIn} className="login__signinButton">Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="Login__registerButton">Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login;

