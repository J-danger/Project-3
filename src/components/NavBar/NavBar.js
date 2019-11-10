import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    
    <div id="wrapper">

      {!isAuthenticated && (
        <span>
        <div className="container">
        <span className="react-logo">
          <span className="nucleo"></span>
        </span>
      
        </div>     
        <h1 className ="animated bounceInRight slow">Welcome</h1>
        <h2 className ="animated bounceInLeft slow">Log in to continue</h2>
        <button className ="animated jackInTheBox slow" id="login" onClick={() =>loginWithRedirect({})}>
          Log in
        </button>
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