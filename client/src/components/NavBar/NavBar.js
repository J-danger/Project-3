import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Authentication from "../Authentication/Authentication"

const Header = () => {
  const { isAuthenticated, logout } = useAuth0();

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
          <div id="logButton">
        <button className ="login" id="logout" onClick={() => logout()}>Log out</button>
        </div>
          <div id="links">
            <Link to="/" className="links">Home</Link>&nbsp;
            <Link to="/posts" className="links">Discussions</Link>&nbsp;
            <Link to="/profile" className="links">Profile</Link>
          </div>
        </div>
      </span>
    )}
    </div>
    
  );
};

export default Header;