
import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import styles from "../styles"
import Jumbotron from "../components/Jumbotron/Jumbo";
import NavBar from "../components/NavBar/NavBar"
import Header from "../components/Header/Header"

export function Login ({ children }) {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (   

    <div id="wrapper">
     
      {!isAuthenticated && (
          <span>
           <NavBar/>
          </span>               
      )}      
      {isAuthenticated && (
        <span>
        <Header/>   
        <div className="list-overflow-container">
           There will be a list of top/stickied discussions here
              <ul className="list-group">{children}</ul>
        </div>    
      </span>
    )}
    </div>  
    
  );
};

export default Login;