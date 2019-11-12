import React, { Component } from "react";
import API from "../utils/API"
import NavBar from "../components/NavBar/NavBar"
import { Input, TextArea, FormBtn } from "../components/Form/Form";
import List from "../components/List/List.js"
import ListItem from "../components/List/List.js"

import { Link } from "react-router-dom";

class Posts extends Component {
   state = {
    posts: [],
    title: "",
    user: "",
    body: ""
   }

    componentDidMount() {
    this.loadPosts();
  }

    loadPosts = () => {
        API.getPosts()
            .then(res =>
                this.setState({posts: res.data, title: "", user: "", body: ""}))
                .catch(err=> console.log(err))
            };

    handleInputChange = event => {
        const {name, value} = event.target
        this.setState({
          [name]: value
            
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.body){
            API.savePost({
            title: this.state.title,
            body: this.state.body, 
            // // this part might be wrong
            // user: this.state.user           
            })
        }
    };

    render() {
        return(
          <>
        <NavBar/>            
            {this.state.posts.length ? (
              <List>
                {this.state.posts.map(post => (
                  <ListItem key={post._id}>
                    <Link to={"/posts/" + post._id}>
                      <strong>
                        {post.title} by {post.user}
                      </strong>
                    </Link>                    
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>Loading...</h3>
            )}
             </>
         
        )
    }
  }

  export default Posts;

