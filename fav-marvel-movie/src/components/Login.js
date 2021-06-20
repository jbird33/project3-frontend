import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import avengers1 from "../avengers1.jpg"

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

    // Need the URL localhost:3000 inserted here to send the information over to the profile page
    handleSubmit = (event) => {
        event.preventDefault()
        // This is a post and not a get to the backend
        axios.post("http://localhost:3001/users/login", this.state.user)
            .then(response => {
                console.log("Logged In User!!")
                console.log(response)
                // Not sure what below does or where this came from response.user.user.id 
                //${response.user.user.id} may change depending on the console.log(response) 
                this.props.history.push(`/profile/${response.data.id}`)
            })
            .catch(err => {
                console.log(err)
                alert("Wrong Username or Password. Try Again")
            })
    }


    render() {
        return (
            <div>
                <div className="navigation">
                    <nav>
                        <Link to="/">Homepage</Link>
                    </nav>
                </div>
                
                <h1 className="login-header">Start Viewing Your Movie Mania Here!</h1>

                <div className="login-body">

                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend>Login to See Your Favorite Movie!</legend><br></br>
                            <label htmlFor="username">Username: </label><input onChange={this.handleChange} type="text" name="username" placeholder="username" /> <br></br>
                            <label htmlFor="password">Password: </label><input onChange={this.handleChange} type="password" name="password" placeholder="password" /><br></br><br></br>
                            <input type="submit" value="Login" />
                        </fieldset>

                    </form>
                    <img className="login-image" src={avengers1} alt="avengers one" />

                </div>

            </div >
        )
    }
}

export default Login