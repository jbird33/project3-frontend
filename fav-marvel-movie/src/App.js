import logo from './logo.svg';
import './App.css';
import React from "react";
import {Link, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login"
import SignUp from "./components/SignUp"

function App() {
  return (
    <div className="App">

      <Route path="/" exact render={() => <Home />} />

      <Route path="/login" render={() => <Login /> } />

      <Route path="/signup" render={() => <SignUp /> } />

      
    </div>
  );
}

export default App;
