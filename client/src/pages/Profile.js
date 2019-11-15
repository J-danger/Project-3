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
    <>
      <NavBar />
      <div id="profileWrapper" className ="animated rotateInUpRight fast">
      <img src={user.picture} id="UserImage" alt="Profile" height="200px" width="200px" className ="animated fadeInUp slow" style={{borderRadius: "50%", border:"10px solid #070708"}} />
      <div id="userInfo" className ="animated fadeInRight slow" >
      <h2>User Name: {user.name}</h2>
      <h3>Email: {user.email}</h3>      
      </div>
      </div>
      </>
      
      
  // <bio
  // value={this.state.input}
  // onChange={this.handleInputChange}
  // name="bio"
  // placeholder="Please enter a bio."
  // />
  )
};
  
  
  

export default Profile;