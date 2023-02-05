import React from 'react';
import InputBox from '../src/Components/UI/InputElement';
// import Navbar from './Components/Layouts/Navbar';
// import "../../StyleSheet/Form.css"
import { NavLink, Link } from "react-router-dom";

function Login() {
    return (
        <form >
            <div class="container">

<div>

                <label for="uname"><b>Username</b></label>
                <InputBox type="text" placeholder="Enter Username" name="uname" />
</div>
<div>
                <label for="email"><b>Email</b></label>
                < InputBox type="email" placeholder="Enter Email" name="email" />
                </div>  <div>         
                <label for="psw"><b>Password</b></label>
                <InputBox type="password" placeholder="Enter Password" name="psw" />

                </div><div>
                <button type="submit">Submit</button>
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