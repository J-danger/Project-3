
import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";

import Jumbotron from "../Jumbotron/Jumbo";

const Posts = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    
  

    <div id="wrapper">
     
      {!isAuthenticated && (
          <span>
         
    </span>               
      )}      
      {isAuthenticated && (
        <span>
        <div class="container">test</div> 
      </span>
    )}
    </div>  
    
  );
};

export default Posts;