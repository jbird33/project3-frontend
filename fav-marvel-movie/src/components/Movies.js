import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";


class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    //----------------------------------------------

    componentDidMount = () => {
        axios.get("")
            .then(response => {
                console.log(response)
                this.setState({
                    movies: response.data
                    // Might be data but have to check response
                })
            })
    }


    render() {
        console.log(this.state.movies)
        return (
            <div>
                <div className="navigation">
                    <nav>
                        <Link to="/">Homepage</Link>

                        <h1>List of movies </h1>

                    </nav>
                </div>

                <div className="body">

                    {/* {this.state.movies.map(movie => {
                        return (
                            <div>
                                <Link to={`/movies/:id`}>
                                    <img src={movie.image} />
                                    <h3>{movie.title}</h3>
                                </Link>
                            </div>
                        )
                    })} */}

                    {/* Will have ${movie.id} subbed in for :id below */}
                    <Link to={`/movies/:id`}>Individual Movie Details Here</Link>
                </div>
            </div>
        )
    }
}

export default Movies