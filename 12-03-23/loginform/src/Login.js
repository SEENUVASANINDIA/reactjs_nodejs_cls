import React from 'react';
import InputBox from '../src/Components/UI/InputElement';
// import "../../StyleSheet/Form.css"

function Login() {
  return (
    <form >
      <div class="container">
        
       <div>
          <label for="psw"><b>Password</b></label>
        
          <InputBox type="password" placeholder="Enter Password" name="psw" />
		  </div>  <div>   
          <label for="email"><b>Email</b></label>
      
            <InputBox type="email" placeholder="Enter Email" name="email"  />
			</div><div>
            <button type="submit">Login</button>
        </div></div>
    </form>
  )
}

export default Login