import React from "react";

const EditProfile = (props) => {
    return (
        <div>
            <h1>Edit your Profile Here</h1>
            <form>

                <label for="name">Name: </label><input type="text" name="name" placeholder="name" /><br></br>
                <label for="username">Username: </label><input type="text" name="username" placeholder="username" /><br></br>
                <label for="password">Password: </label><input type="password" name="password" placeholder="password" /><br></br>
                <label for="email">Email: </label><input type="text" name="email" placeholder="email" /><br></br>
                <label for="favMovie">Favorite Movie: </label><input type="text" name="favMovie" placeholder="favorite movie" /><br></br><br></br>
                <input type="submit" value="Make Changes" />

            </form>

        </div>
    )
}

export default EditProfile