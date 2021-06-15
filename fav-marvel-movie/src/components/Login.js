import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
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
                        <h1>Login to See Favorite Movie List!</h1>
                    </nav>

                </div>

                <div className="body">



                </div>

            </div >
        )
    }
}

export default Login