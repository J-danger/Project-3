import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import "./Form.css"

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="formContainer">
    {!isAuthenticated &&
     <></>
    }
    {isAuthenticated && 
     <>
     <h3>Title</h3>
     <div className="form-group">
       <input className="form-control" {...props} />
     </div>
     </>
    }

    </div>  
  );
}

export function TextArea(props) {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="formContainer">
      {!isAuthenticated && 
      <></>
      }
      {isAuthenticated &&
      <>
      <h3>Body</h3>
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
    </>
      
      }
    </div>
  );
}

export function FormBtn(props) {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="submitContainer">
      {!isAuthenticated && 
      <></>
      }
      {isAuthenticated &&
      <button id="submitPost" {...props} style={{ float: "none", marginBottom: 10 }} className="btn btn-success">
        Submit
      </button>

      }
    </div>
  );
}