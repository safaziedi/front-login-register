import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import profile from "./../images/man.png";
import axios  from "axios";
import { useState } from "react";
import { Formik, Form } from 'formik';
import { useNavigate } from "react-router-dom";

function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  let navigate = useNavigate();

  const handlesubmit =(e) => {
    e.preventDefault()
    axios.post(
      'http://localhost:8000/auth/signin',
      {
      
        email: email,
        password: password ,
    
      }
    )
    .then((res) =>{
      console.log(res)
      navigate("/hello", { replace: true });
    })
    .catch((err) => {
      alert("credentials incorecct")
      console.log(err)
    })
  }
  return (
    <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    onSubmit={values => {
      console.log(values)
    }}
  >
    {formik => (
    <div className="form-signin w-100 m-auto">
      <form onSubmit={handlesubmit}>
        <img className="mb-4" src={profile} alt="" width="100" height="100" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            value={email} onChange={
              (e) => {
                setEmail(e.target.value)
              }}
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            value={password} onChange={
              (e) => {
                setPassword(e.target.value)
              }}
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            autoComplete="on"
            required
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
)}
</Formik>
)
}
export default Login;
