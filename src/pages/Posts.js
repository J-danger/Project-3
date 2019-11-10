
import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

import Jumbotron from "../components/Jumbotron/Jumbo";

export function Posts ({ children }) {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (   

    <div id="wrapper">
     
      {!isAuthenticated && (
          <span>
           
          </span>               
      )}      
      {isAuthenticated && (
        <span>
         <div className="list-overflow-container">
           There will be a forum here with posts
              <ul className="list-group">{children}</ul>
            </div>
      </span>
    )}
    </div>  
    
  );
};

export default Posts;