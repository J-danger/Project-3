
import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import Authentication from "../components/Authentication/Authentication"
import NavBar from "../components/NavBar/NavBar"
import "./Login.css"
import java from "./js.png"

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
        
          
        
       
        <div className="card">
        <img src={java} alt={java} height="200px" width="200px"></img>
        <div className="linksToPosts">
           <Link to="/posts/5dcc8fdd7b586e252c58545e" className="linksToPosts" >Javascript</Link>&nbsp;
          </div>
        </div>
        
              
        
      </span>
    )}
    </div>  
    
  );
};

export default Login;