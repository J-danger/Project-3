import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import "./List.css";


// This file exports both the List and ListItem components

export default function List({ children }) {
  const { isAuthenticated } = useAuth0();

  return (
<div id="wrapper">

{!isAuthenticated && (  
 <></>
)}

{isAuthenticated && (
  <span>
      
      <div className="list-container">
      
      <ul className="list-group">{children}</ul>
      </div>
      </span>
      )}
      </div>
   
    )
  
}

export function ListItem({ children }) {
  return( 
    <div id="container">
  <li className="list-group-item" id="post">{children} </li>
  </div>
  );
}
