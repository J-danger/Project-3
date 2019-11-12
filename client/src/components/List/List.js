import React from "react";
import "./List.css";
import User from "../User/User"

// This file exports both the List and ListItem components

export default function List({ children }) {
  return (
 
    <div className="list-overflow-container">
      <ul className="list-group">{children} <p>by <User/></p></ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item" id="post">{children}</li>;
}
