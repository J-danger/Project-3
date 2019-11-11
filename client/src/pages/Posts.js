import React, { Component } from "react";
import API from "../utils/API"
import NavBar from "../components/NavBar/NavBar"
import Forum from "../components/Forum/Forum"
import { Input, TextArea, FormBtn } from "../components/Form/Form";

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
         <Forum />         
         <Input   
          value={this.state.title}
          onChange={this.handleInputChange}
          name="title"
          placeholder="Title (required)"/>
         
         <TextArea  
          value={this.state.body}
          onChange={this.handleInputChange}
          name="body"
          placeholder="What do you want to say? (required)"/>
         <FormBtn 
          disabled={!(this.state.title && this.state.body)}
          onClick={this.handleFormSubmit}
          />
         </>
         
        )
    }
  }

  export default Posts;

