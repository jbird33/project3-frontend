import logo from './logo.svg';
import './App.css';
import React from "react";
import {Link, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";
import Movies from "./components/Movies";
import OneMovie from "./components/OneMovie";


function App() {
  return (
    <div className="App">

      <Route path="/" exact render={() => <Home />} />

      <Route path="/login" render={(props) => <Login {...props} /> } />

      <Route path="/signup" render={(props) => <SignUp {...props}/> } />

      <Route path="/profile/:id" render={(props) => <UserProfile {...props}/> } />

      <Route path="/movies" exact render={() => <Movies /> } />

      <Route path="/movies/:id" render={(props) => <OneMovie {...props} /> } />

      

      
    </div>
  );
}

export default App;
