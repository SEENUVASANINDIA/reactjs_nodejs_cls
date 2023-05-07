import React from 'react';
import InputBox from '../src/Components/UI/InputElement';
// import Navbar from './Components/Layouts/Navbar';
// import "../../StyleSheet/Form.css"
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Login() {


    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
        errors.username = "Username is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
    };
  





    return (
        <form className='signinform' onSubmit={handleSubmit}>
            <div class="container">

<div>


                <label for="uname"><b>Username</b></label>
                <InputBox type="text" placeholder="Enter Username" name="username" value={formValues.username}
              onChange={handleChange} />
</div>
<div>
                <label for="email"><b>Email</b></label>
                < InputBox type="email" placeholder="Enter Email" name="email" />
                </div>  <div>         
                <label for="psw"><b>Password</b></label>
                <InputBox type="password" placeholder="Enter Password" name="password" value={formValues.password}
              onChange={handleChange} />

                </div><div>
                <button type="submit" >Submit</button>
            </div>
            <div>
                {/* <Navbar/> */}
                <label for="link"><b>Already a user </b></label>
               
                <Link to="/login" name ="link">Login</Link>
            </div>
            </div>
            
        </form>
    )
}

export default Login