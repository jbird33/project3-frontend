import React from "react";

const EditProfile = (props) => {
    return (
        <div>
            <h1>Edit your Profile Here</h1>
            <form className="edit-form" onSubmit={props.handleSubmit}>
                {/* Need to add this when time: value={props.user.name} into each input */}
                <label htmlFor="name">Name: </label>
                <input onChange={props.handleChange} type="text" name="name" placeholder="name" /><br></br>
                <label htmlFor="username">Username: </label>
                <input onChange={props.handleChange} type="text" name="username" placeholder="username" /><br></br>
                <label htmlFor="password">Password: </label>
                <input onChange={props.handleChange} type="password" name="password" placeholder="password" /><br></br>
                <label htmlFor="email">Email: </label>
                <input onChange={props.handleChange} type="text" name="email" placeholder="email" /><br></br>
                <label htmlFor="movieId">Favorite Movie: </label>
                <input onChange={props.handleChange} type="text" name="movieId" placeholder="favorite movie" /><br></br><br></br>
                <input type="submit" value="Make Changes" /><br></br><br></br>

            </form>
            <button onClick={props.handleDelete}>Delete Your Profile</button>

        </div>
    )
}

export default EditProfile