import React from "react";
import { Link, Route } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <div className="navigation" id="home">
                <h1 className="home-header">Welcome to MARVEL Movie Mania!</h1>

                <ul>
                    <Link to="/login"><li>Login</li></Link>
                    <Link to="/signup"><li>Sign-Up</li></Link>
                </ul>

            </div>

            <div className="body">


            </div>


        </div>
    )
}

export default Home