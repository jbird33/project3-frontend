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
                favMovie: ""
            }

        }
    }
    //----------------------------------------------------------------
    //** First thing in the morning!!!! Jeremiah!!! */
    componentDidMount = () => {
        axios.get(`http://localhost:3001/users/profile/${this.props.match.params.id}`)
            .then(response => {
                console.log(response)
                this.setState({
                    user: response.data.user  // *Hopefully this will be correct
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

    render(){
        console.log(this.state.user)
        // Below is so I don't have to rewrite this.state every time
        const user = this.state.user
        return (
            <div>
                <div className="navigation">
                    <nav>
                        <Link to="/">Homepage</Link>

                        <h1>Welcome True Believer: {user.name}! </h1> 
                        {/* Will have this: {this.props.user.name} inside */}
                    </nav>
                </div>

                <div className="body">

                {/* Should have something that looks like this here: */}
                <h2>{user.name}</h2>
                <h2>{user.username}</h2> 
                <h2>{user.email}</h2>
                <h2>{user.password}</h2>

                <Link to="/movies"><li>MCU Movie List</li></Link>    

                    <EditProfile 
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