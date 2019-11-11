
import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Authentication from "../components/Authentication/Authentication"
import NavBar from "../components/NavBar/NavBar"

export function Login ({ children }) {
  const { isAuthenticated } = useAuth0();  

  return (   

    <div id="wrapper">
     
      {!isAuthenticated && (
          <span>
           <Authentication/>
          </span>               
      )}      
      {isAuthenticated && (
        <span>
        <NavBar/>  
        
           There will be a list of top/stickied discussions here
              
        
      </span>
    )}
    </div>  
    
  );
};

export default Login;