// import logo from './logo.svg';
import './App.css';
import Dashboard from '../src/components/Dashboard';
import Preferences from '../src/components/Preferences';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React, { useState } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
// import Dashboard from '../Dashboard/Dashboard';
import Login from '../src/components/Login';
// import Preferences from '../Preferences/Preferences';
import useToken from '../src/components/useToken';
// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
  const { token, setToken } = useToken();
  // const token = getToken();
  // const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  if(token){
return <Dashboard/>
  }
  // else{
  //   return <Dashboard/>
  // }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/dashboard" exact element={<Dashboard/>} />
          <Route path="/preferences" exact element={<Preferences />} />
        
        </Routes>
      </Router>
    </div>
  );
}

// export default App;
export default App;
