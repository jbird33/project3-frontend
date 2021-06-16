import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class UserProfile extends Component {
    constructor(props) {
        super();
        this.state = {
            user: {
                name: "",
                username: "",
                password: "",
                email: "",
                favMovie: ""
            }

        }
    }



    render() {
        return (
            <div>
                <div className="navigation">
                    <nav>
                        <Link to="/">Homepage</Link>
                        <h1>Welcome, {this.props.user.name} </h1>
                    </nav>
                </div>

                <div className="body">
                    
                </div>
            </div>
        )
    }
}

export default UserProfile