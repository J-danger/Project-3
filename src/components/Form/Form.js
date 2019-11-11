import React from "react";
import "./Form.css"

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button id="submitPost" {...props} style={{ float: "none", marginBottom: 10 }} className="btn btn-success">
      Submit
    </button>
  );
}