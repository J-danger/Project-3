// src/App.js

import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Posts from "./pages/Posts"
import Login from "./pages/Login"

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <BrowserRouter>
      <div className="App">          
        
        <Switch>         
            <Route exact path="/" component={Login}/>
            <PrivateRoute exact path="/profile"  component={Profile}  />
            <Route exact path="/posts"  component={Posts}  />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;