import React from "react";
import { Link, useHistory } from "react-router-dom";

function Login() {
  return (
    <div className="Login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <h1>Login</h1>
    </div>
  );
}

export default Login;
