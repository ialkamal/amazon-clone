import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../backend/firebase";
import "./Login.css";

const initialState = {
  email: "",
  password: "",
};

function Login() {
  const [credentials, setCredentials] = useState(initialState);
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            name="email"
            value={credentials.email}
            type="text"
            onChange={handleChange}
          />
          <h5>Password</h5>
          <input
            name="password"
            value={credentials.password}
            type="password"
            onChange={handleChange}
          />
          <button type="submit" className="login__signIn" onClick={login}>
            Sign in
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login__signUp" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
