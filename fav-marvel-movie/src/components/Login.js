import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: "",
                password: ""
            }
        }
    }

    handleChange = (event) => {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [event.target.name]: event.target.value
            }
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault()

        axios.get("", this.state.user)
            .then(response => {
                console.log("Logged In User!!")
                console.log(response)
                this.props.history.push(`/profile/${response.user.user.id}`)
            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {
        return (
            <div>
                <div className="navigation">
                    <nav>
                        <Link to="/">Homepage</Link>
                        <h1>Start Viewing Your Movie Mania Here!</h1>
                    </nav>

                </div>

                <div className="body">

                    <form onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend>Login to See Your Favorite Movie!</legend><br></br>
                            <label for="username">Username: </label><input onChange={this.handleChange} type="text" name="username" placeholder="username" /> <br></br>
                            <label for="password">Password: </label><input onChange={this.handleChange} type="password" name="password" placeholder="password" /><br></br><br></br>
                            <input type="submit" value="Login" />
                        </fieldset>

                    </form>

                </div>

            </div >
        )
    }
}

export default Login