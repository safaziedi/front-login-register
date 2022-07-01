import React from "react";
import "./Login.css";
import profile from "./../images/user.png";

function Register() {
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
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            autoComplete="on"
          />
          <label for="floatingPassword">Password</label>
        </div><br />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign Up 
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; Ziadi Safa</p>
      </form>
    </div>
  );
}

export default Register

