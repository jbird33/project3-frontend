import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import marvelgif from '../marvelgif.gif';

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

        axios.post("http://localhost:3001/users/signup", this.state.user)
            .then(response => {
                console.log("Creating Profile!")
                console.log(response)
                // Not sure what below does or where this came from response.user.user.id  
                //${response.user.user.id} may change depending on the console.log(response)
                this.props.history.push(`/profile/${response.data.id}`)
            })
            // .catch(err => {
            //     console.log(err)
            // })
    }
//------------------------------------------------------------------

    render() {
        return (
            <div>
                <img className="marvel-img" src={marvelgif} alt="marvellogo" />
                <div className="navigation">
                    <nav>
                        <Link to="/">Homepage</Link>
                    </nav>

                </div>
                        
                <h1 className="signup-header">Track your Favorite Marvel Movies </h1>

                <div className="signup-body">
                    <form className="signup-form" onSubmit={this.handleSubmit}>
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