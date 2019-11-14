import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import "./UserImage.css"
import { Link } from "react-router-dom";

const UserImage = () => {
    const { user } = useAuth0();
    return(        
        <div id="userImage">
        <Link to="/profile" className="links"><img src={user.picture} to="/profile" alt="Profile" height="50px" width="50px"/></Link>  
        </div>   
        )

}

export default UserImage