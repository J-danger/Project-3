
import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import logo from "./logo512.png";
import Authentication from "../components/Authentication/Authentication"
import NavBar from "../components/NavBar/NavBar"
import "./Login.css"

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
        
           
              <h1 style={{color:"white"}}>Welcome to Pile Underflow!</h1>
              <h2 style={{color:"white"}}>About this site:</h2>
              <p>Pile Overflow is a web development discussion board for simple web development questions.</p>
              <h4 style={{color:"white"}}>Topics to cover:</h4>
              <ul style={{listStyleType:"circle", color:"white"}} >
              <li>HTML</li>
              <li>CSS</li>
              <li>Unordered lists</li>
              <li>Ordered lists?</li>
              <li>Why did my wife leave me?</li>
              <li>She took the kids!</li>
              <li>Basic JavaScript</li>
              <li>And much much more!</li>
              </ul>
              <img src={logo} alt={logo} style={{position:"relative", left:"700px", bottom:"350px"}} />
      </span>
    )}
    </div>  
    
  );
};

export default Login;