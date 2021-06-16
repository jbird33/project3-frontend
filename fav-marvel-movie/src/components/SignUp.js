import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "",
                username: "",
                password: "",
                email: ""
            }
        }
    }

//--------------------------------------------------------------

    handleChange = (event) => {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [event.target.name]: event.target.value
            }
        }))
    }

//----------------------------------------------------------------

    handleSubmit = (event) => {
        event.preventDefault()

        axios.post("https://localhost:3001/users/signup", this.state.user)
            .then(response => {
                console.log("Creating Profile!")
                console.log(response)
                // Not sure what below does or where this came from response.user.user.id  
                //${response.user.user.id} may change depending on the console.log(response)
                this.props.history.push(`/profile/${response.user.user.id}`)
            })
            .catch(err => {
                console.log(err)
            })
    }
//------------------------------------------------------------------

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
                    <form onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend>Sign Up for Marvel Movie Mania!</legend><br></br>
                            <label htmlFor="name">Name: </label>
                            <input onChange={this.handleChange} type="text" name="name" placeholder="name" /><br></br>
                            <label htmlFor="username">Username: </label>
                            <input onChange={this.handleChange} type="text" name="username" placeholder="username" /><br></br>
                            <label htmlFor="password">Password: </label>
                            <input onChange={this.handleChange} type="password" name="password" placeholder="password" /><br></br>
                            <label htmlFor="email">Email: </label>
                            <input onChange={this.handleChange} type="text" name="email" placeholder="email" /><br></br>

                            <input type="submit" value="Sign Up" />
                        </fieldset>

                    </form>


                </div>

            </div>
        )
    }
}

export default SignUp