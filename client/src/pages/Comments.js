import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar"

import API from "../utils/API";

class Comments extends Component {
    state ={
        comment: {}
    }
    componentDidMount() {
        API.getPost(this.props.match.params.id)       
          .then(res => this.setState({ comment: res.data }))
          .catch(err => console.log(err));
      }

      render(){
          return(
              <>   
              <NavBar />         
                <h1>  
                    {this.state.comment.title} 
                </h1>    
                <h2>
                    {this.state.comment.body}
                </h2>      
          </>
          )
      }
}

export default Comments