import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import"./Thread.css"



// This file exports both the List and ListItem components

export default function CommentList({ children }) {
  const { isAuthenticated } = useAuth0();

  return (
<div id="wrapper">

{!isAuthenticated && (  
 <></>
)}

{isAuthenticated && (
  <span>
      <div className="list-container">
      <ul className="list-group" >{children}</ul>
      </div>
      </span>
      )}
      </div>
   
    )
  
}

export function CommentListItem({ children }) {
  return( 
    <div id="container">
  <li className="list-group-item" id="comment">{children} </li>
  </div>
  );
}
