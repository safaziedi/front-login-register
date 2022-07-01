import React from "react";
import "./Login.css";
import profile from "./../images/user.png";
import axios  from "axios";
import { useState } from "react";
import { Formik} from 'formik';
import { useNavigate } from "react-router-dom";

function Register () {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  let navigate = useNavigate();

  const handlesubmit =(e) => {
    e.preventDefault()
    
    axios.post(
      'http://localhost:8000/auth/singup',
      {
      
        email: email,
        password: password ,
    
      }
    )
    .then((res) =>{
      console.log(res)
      navigate("/login", { replace: true });
    })
    .catch((err) => {
      alert("User already exist")
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
        <h1 className="h3 mb-3 fw-normal">Sign up</h1>

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
              required
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            autoComplete="on"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div><br />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign Up 
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; Ziadi Safa</p>
      </form>
    </div>
  )}
  </Formik>
)
}
export default Register

