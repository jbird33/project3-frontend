import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                        <h1>Sign Up to Track your Favorite Marvel Movie </h1>
                    </nav>

                </div>

                <div className="body">



                </div>

            </div>
        )
    }
}

export default SignUp