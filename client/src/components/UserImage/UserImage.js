import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import "./UserImage.css"

const UserImage = () => {
    const { user } = useAuth0();
    return(        
        <img src={user.picture} alt="Profile" height="50px" width="50px"/>        
        )

}

export default UserImage