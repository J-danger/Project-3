
import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

import List from "../List/List"

export function Forum ({ children }) {
  const { isAuthenticated} = useAuth0();

  return (   

    <div className="container">
     
      {!isAuthenticated && (
          <>           
          </>               
      )}      
      {isAuthenticated && (
        <span>         
              <List />              
            
      </span>
    )}
    </div>  
    
  );
};

export default Forum;