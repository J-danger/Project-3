// src/components/Profile.js

import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import NavBar from "../components/NavBar/NavBar"
import "./Profile.css"

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <Fragment>
      <NavBar />
      <div id="profileWrapper" className ="animated rotateInUpRight fast">
      <img src={user.picture} alt="Profile" height="200px" width="200px" className ="animated fadeInUp slow" />
      <div id="userInfo" className ="animated fadeInRight slow">
      <h2>User Name: {user.name}</h2>
      <h3>Email: {user.email}</h3>      
      </div>
      </div>
      
    </Fragment>
  );
};

export default Profile;