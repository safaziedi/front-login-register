import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import profile from "./../images/man.png";

function Login() {
  return (
    <div className="form-signin w-100 m-auto">
      <form>
        <img className="mb-4" src={profile} alt="" width="100" height="100" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            autoComplete="on"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button> <br /><br />
        <p>Don't have an account yet? </p><Link to="/register">Sign-up</Link>
  
      </form>
    </div>
  );
}

export default Login;
