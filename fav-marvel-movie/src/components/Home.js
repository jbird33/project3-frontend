import React from "react";
import { Link, Route } from "react-router-dom";
import marvelgif from '../marvelgif.gif';


const Home = () => {
    return (
        <div className="homepage">

            <div className="home-body">
                <img className="marvel-img" src={marvelgif} alt="marvellogo" />
                <h1 className="home-header">Welcome to MARVEL Movie Mania!</h1>
            </div>

            <div className="navigation" id="home">
                <Link to="/login"><h3>Login</h3></Link>
                <Link to="/signup"><h3>Sign-Up</h3></Link>
            </div>





        </div>
    )
}

export default Home