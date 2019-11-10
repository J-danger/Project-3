import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";
import "./Header.css";
import Jumbotron from "../Jumbotron/Jumbo";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    
    <div id="wrapper">

      {!isAuthenticated && (
        <span>
        <div class="container">
        <span class="react-logo">
          <span class="nucleo"></span>
        </span>
      
        </div>     
        <h1 class ="animated bounceInRight slow">Welcome</h1>
        <h2 class ="animated bounceInLeft slow">Log in to continue</h2>
        <button class ="animated jackInTheBox slow" id="login" onClick={() =>loginWithRedirect({})}>
          Log in
        </button>
        </span>
      )}

      
      {isAuthenticated && (
        <span>
        <div id="authenticatedHeader">
        <button class ="login" id="logout" onClick={() => logout()}>Log out</button>
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