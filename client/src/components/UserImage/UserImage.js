import React, { Fragment } from "react";
import { useAuth0 } from "../../react-auth0-spa";

const UserImage = () => {
    const { user } = useAuth0();
    return(
        <Fragment>
        <img src={user.picture} alt="Profile" height="50px" width="50px"/>
        </Fragment>
        )

}

export default UserImage