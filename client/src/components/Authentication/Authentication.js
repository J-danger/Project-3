import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";
import "./Authentication.css";
import Jumbotron from "../Jumbotron/Jumbo";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Jumbotron>
    <div id="wrapper">

      {!isAuthenticated && (
        <span>
        <div className="container">
          
          <span className="react-logo">
            <span className="nucleo"></span>
          </span>
        </div>     
          
          <h1 className ="animated bounceInRight slow" id="welcome">
          Welcome to <span className="stack">Stack</span><span className="underFlow">Underflow </span>
          </h1>
          <h4 className ="animated rotateInUpLeft slow" id="description">
            Web Dev help forum for beginners
          </h4>
        <button className ="animated rotateInUpRight slow" id="login" onClick={() =>loginWithRedirect({})}>
            Log in
        </button>          
        </span>
      )}

      {isAuthenticated && <button className ="login" id="logout" onClick={() => logout()}>Log out</button>}
      {isAuthenticated && (
        <span>
        <Link to="/posts">Discussions</Link>&nbsp;
        <Link to="/profile">Profile</Link>
      </span>
    )}
    </div>
    </Jumbotron>
  );
};

export default NavBar;