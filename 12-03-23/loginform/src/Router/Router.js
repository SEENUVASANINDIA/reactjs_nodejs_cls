import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Signin from "../Sign_in";
import Login from "../Login";

class MainRouter extends Component {
  render = () => {
    return (
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" exact element={<Signin/>} />
          <Route path="/Signin" exact element={<Signin/>} />
          <Route path="/Login" exact element={<Login />} />
        
        </Routes>
      </Router>
    );
  };
}

export default MainRouter;
