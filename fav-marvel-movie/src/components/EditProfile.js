import React from "react";

const EditProfile = (props) => {
    return (
        <div>
            <h1>Edit your Profile Here</h1>
            <form onSubmit={props.handleSubmit}>
{/* Need to add this when time: value={props.user.name} into each input */}
                <label for="name">Name: </label>
                <input onChange={props.handleChange} type="text" name="name" placeholder="name" /><br></br>
                <label for="username">Username: </label>
                <input onChange={props.handleChange} type="text" name="username" placeholder="username" /><br></br>
                <label for="password">Password: </label>
                <input onChange={props.handleChange} type="password" name="password" placeholder="password" /><br></br>
                <label for="email">Email: </label>
                <input onChange={props.handleChange} type="text" name="email" placeholder="email" /><br></br>
                <label for="favMovie">Favorite Movie: </label>
                <input onChange={props.handleChange} type="text" name="favMovie" placeholder="favorite movie" /><br></br><br></br>
                <input type="submit" value="Make Changes" />

            </form>

        </div>
    )
}

export default EditProfile