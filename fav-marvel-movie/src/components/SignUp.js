import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div>
                <div className="navigation">
                    <nav>
                        <Link to="/">Homepage</Link>
                        <h1>Track your Favorite Marvel Movies </h1>
                    </nav>

                </div>

                <div className="body">
                <form>
                        <fieldset>
                            <legend>Sign Up for Marvel Movie Mania!</legend><br></br>
                            <label for="name">Name: </label><input type="text" name="name" placeholder="name" /><br></br>
                            <label for="username">Username: </label><input type="text" name="username" placeholder="username" /><br></br>
                            <label for="password">Password: </label><input type="password" name="password" placeholder="password" /><br></br>
                            <label for="email">Email: </label><input type="text" name="email" placeholder="email" /><br></br>
                            <label for="favMovie">Favorite MCU Movie: </label><input type="text" name="favMovie" placeholder="favorite movie" /><br></br>
                            <input type="submit" value="Login" />
                        </fieldset>

                    </form>


                </div>

            </div>
        )
    }
}

export default SignUp