import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EditProfile from "./EditProfile";
import Movies from "./Movies"

class UserProfile extends Component {
    constructor(props) {
        super();
        this.state = {
            user: {
                name: "",
                username: "",
                password: "",
                email: "",
                movieId: ""
            },
            movies: []

        }
    }
    //----------------------------------------------------------------
    //** First thing in the morning!!!! Jeremiah!!! */
    componentDidMount = () => {
        axios.get(`http://localhost:3001/users/profile/${this.props.match.params.id}`)
            .then(response => {
                console.log(response)
                this.setState({
                    user: response.data.user,  // *Hopefully this will be correct
                    movies: response.data.movie
                })
            })
    }
    //----------------------------------------------------------------

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

        axios.put(`http://localhost:3001/users/profile/${this.props.match.params.id}`, this.state.user)
            .then(response =>
                console.log("Making Chnages!"))
    }

    //----------------------------------------------------------------

    handleDelete = async (event) => {
        await axios.delete(`http://localhost:3001/users/profile/${this.props.match.params.id}`)
            .then(response => {
                console.log("Deleting this User")
                //Redirect to homepage
                this.props.history.push('/')
            })
    }

    render() {
        console.log(this.state.user)
        console.log(this.state.movies)
        console.log(this.state.user.movieId)

        // Below is so I don't have to rewrite this.state every time
        const user = this.state.user;
        const movies = this.state.movies;

        return (
            <div>
                <div className="navigation">
                    <nav>
                        <Link to="/">Homepage</Link>


                    </nav>
                </div>

                <div className="body">
                    <fieldset>
                        <legend><h1>Welcome True Believer: {user.name}! </h1></legend><br></br>
                        <h2>  <label htmlFor="name">Name: </label>{user.name}</h2> <br></br>
                        <h2>  <label htmlFor="username">Username: </label>{user.username}</h2> <br></br>
                        <h2>  <label htmlFor="password">Password: </label>{user.password}</h2> <br></br>
                        <h2>  <label htmlFor="email">Email: </label>{user.email}</h2> <br></br>
                        <h2>  <label htmlFor="movieID">Favorite MCU Movie: </label> {user.movieId}</h2> <br></br>
                    </fieldset>







                    <Link to="/movies"><li>MCU Movie List</li></Link>

                    <EditProfile
                        movies={movies}
                        user={this.state.user}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        handleDelete={this.handleDelete}
                    />

                </div>
            </div>
        )
    }
}

export default UserProfile