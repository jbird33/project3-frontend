import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EditProfile from "./EditProfile";

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
    componentDidMount = () => {
        axios.get()
            .then(response => {
                console.log(response)
                this.setState({
                    user: response.data  // *Hopefully this will be correct
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

        axios.put()
            .then(response =>
                console.log("Making Chnages!"))
    }

    //----------------------------------------------------------------

    handleDelete = async (event) => {
        await axios.delete()
        .then(response => {
            console.log("Deleting this User")
            //Redirect to homepage
        })
    }

    render() {
        return (
            <div>
                <div className="navigation">
                    <nav>
                        <Link to="/">Homepage</Link>
                        <h1>Profile Page</h1>
                        {/* <h1>Welcome, {this.props.user.name} </h1> */}
                    </nav>
                </div>

                <div className="body">

                    <EditProfile />

                </div>
            </div>
        )
    }
}

export default UserProfile