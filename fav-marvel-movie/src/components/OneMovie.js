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
    axios.get()
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
                    <nav>
                        <Link to="/">Homepage</Link>

                        <h1>Single Movie Details!</h1>

                    </nav>
                </div>

                <div className="body">

                    Here is where the movie details are going to go.
                </div>

                
            </div>
        )
    }
}

export default OneMovie



