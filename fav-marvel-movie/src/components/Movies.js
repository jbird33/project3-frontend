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
        axios.get("http://localhost:3001/movies/movies")
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
                    <Link to="/">Homepage</Link>
                </div>
                
                <h1 className="movies-header">List of movies</h1>

                <div className="movies-body">

                    {this.state.movies.map(movie => {
                        return (
                            <div className="each-movie">
                                <Link to={`/movies/${movie.id}`}>
                                    <img src={movie.image} />
                                    {/* <h3>{movie.title}</h3> */}
                                </Link>
                            </div>
                        )
                    })}

               
                </div>
            </div>
        )
    }
}

export default Movies