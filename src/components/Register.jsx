






import React from "react";
import "./Login.css";
import profile from "./../images/user.png";

function Register() {
  return (
    <div class="form-signin w-100 m-auto">
      <form>
        <img class="mb-4" src={profile} alt="" width="100" height="100" />
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div><br />
        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Sign Up 
        </button>
        <p class="mt-5 mb-3 text-muted">&copy; Ziadi Safa</p>
      </form>
    </div>
  );
}

export default Register

