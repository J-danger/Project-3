import React from "react";
import "./List.css";


// This file exports both the List and ListItem components

export default function List({ children }) {
  return (
 
    <div className="list-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return( 
    <div id="container">
  <li className="list-group-item" id="post">{children} </li>
  </div>
  );
}
