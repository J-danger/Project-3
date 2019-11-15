
import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import Authentication from "../components/Authentication/Authentication"
import NavBar from "../components/NavBar/NavBar"
import "./Login.css"
import java from "./js.png"
import react from "./react.png"
import htmlcss from "./htmlcss.svg"

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
        
          
        
        <div className="card-container">
        <div className="card">
        <img id="java" src={java} alt={java} height="200px" width="200px"></img>
        <div className="linkToJava">
           <Link to="/posts/5dcef25856ed4c3aec9de8e0" className="linkToJava" >Javascript</Link>&nbsp;
          </div>
        </div>

        <div className="card">
        <img src={react} alt={react} height="200px" width="200px"></img>
        <div className="linkToReact">
           <Link to="/posts/5dcef26056ed4c3aec9de8e1" className="linkToReact" >React</Link>&nbsp;
          </div>
        </div>

        <div className="card">
        <img src={htmlcss} alt={htmlcss} height="200px" width="200px"></img>
        <div className="linkToReact">
           <Link to="/posts/5dcef26c56ed4c3aec9de8e2" className="linkToReact" >
             <span id="html">Html</span>
             <span id="css">/CSS</span>
             
             
             </Link>&nbsp;
          </div>
        </div>
        
              
        </div>
      </span>
    )}
    </div>  
    
  );
};

export default Login;