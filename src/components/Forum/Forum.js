
import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import NavBar from "../components/NavBar/NavBar"
import { Input, TextArea, FormBtn } from "../components/Form/Form";

export function Posts ({ children }) {
  const { isAuthenticated} = useAuth0();

  return (   

    <div id="wrapper">
     
      {!isAuthenticated && (
          <span>
           
          </span>               
      )}      
      {isAuthenticated && (
        <span>
          <NavBar />
         <div className="list-overflow-container">
           There will be sortable list of discussions here
              <ul className="list-group">{children}</ul>
              <Input />
              <TextArea />
              <FormBtn />
            </div>
      </span>
    )}
    </div>  
    
  );
};

export default Posts;