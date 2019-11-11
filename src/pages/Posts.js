import React, { Component } from "react";
import API from "../utils/API"
import NavBar from "../components/NavBar/NavBar"
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
        const {title, value} = event.target
        this.setState({
            title: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.body){
            API.savePost({
            title: this.state.title,
            body: this.state.body, 
            // this part might be wrong
            user: this.state.user           
            })
        }
    };

    render() {
        return(
          <span>
          <NavBar />
         <div className="list-overflow-container">
           There will be sortable list of discussions here
              
              <Input />
              <TextArea />
              <FormBtn />
            </div>
      </span>
        )
    }
  }

  export default Posts;

