import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


class OneMovie extends Component {
    constructor(props) {
        super();
        this.state = {
            movie: {
                title: "",
                image: "",
                releaseData: "",
                director: "",
                rating: "",
                rottenTomatoe: ""

            }
        }
    }

//--------------------------------------------------------

componentDidMount = () => {
    axios.get(`http://localhost:3001/movies/${this.props.match.params.id}`)
    .then(response => 
        this.setState ({
            movie: response.data
        }))
}

    render() {
        console.log(this.state.movie)
        // Below is so I don't have to rewrite this.state every time
        const movie = this.state.movie
        return (
            <div>
                <div className="navigation">
                    <Link to="/">Homepage</Link>
                </div>
                        
                <h1 className="onemovie-header">Single Movie Details!</h1>

                <div className="onemovie-body">
                    <img className="movie-image" src={movie.image} />
                    <h1>Title:  {movie.title}</h1> 
                    <h1>Release Date:  {movie.releaseDate}</h1>
                    <h1>Director:  {movie.director}</h1>
                    <h1>MPA Rating:  {movie.rating}</h1>
                    <h1>Rotten Tomatoes Score:  {movie.rottenTomatoesScore}</h1>
                </div>
                
            </div>
        )
    }
}

export default OneMovie




