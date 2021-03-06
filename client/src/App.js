// src/App.js

import React from "react";
import { useAuth0 } from "./react-auth0-spa";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Posts from "./pages/Posts"
import Login from "./pages/Login"
import Comments from "./pages/Comments"

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return (
      // <div>Loading...</div>
      <img src={`${process.env.PUBLIC_URL}/img/loading.gif`} className="Loading" ></img>
    );
  }

  return (
    <BrowserRouter>
      <div className="App">    
        
        <Switch>         
            <Route exact path="/" component={Login}/>
            <PrivateRoute exact path="/profile"  component={Profile}  />            
            <PrivateRoute exact path="/posts"  component={Posts}  />
            <PrivateRoute exact path="/posts/:id" component={Comments}  />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;