import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Authentication from "../Authentication/Authentication"

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    
    <div id="wrapper">

      {!isAuthenticated && (
        <span>
       <Authentication />
        </span>
      )}

      
      {isAuthenticated && (
        <span>
        <div id="authenticatedHeader">
        <button className ="login" id="logout" onClick={() => logout()}>Log out</button>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/posts">Discussions</Link>&nbsp;
        <Link to="/profile">Profile</Link>
        </div>
      </span>
    )}
    </div>
    
  );
};

export default Header;