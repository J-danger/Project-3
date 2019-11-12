import React, { Component } from "react";
import API from "../utils/API"
import NavBar from "../components/NavBar/NavBar"
import List from "../components/List/List.js"
import ListItem from "../components/List/List.js"
import { Input, TextArea, FormBtn } from "../components/Form/Form";
import { Link } from "react-router-dom";

class Posts extends Component {
   state = {
    posts: [],
    title: "",
    user: "",
    body: "",  
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
            this.loadPosts()
        }
    };    

    render() {
        return(
          <>
        <NavBar/>            
            {this.state.posts.length ? (
              <>
              <List>
                {this.state.posts.map(post => (
                  <ListItem key={post._id} data-attribute={post._id}>
                    <Link to={"/posts/" + post._id}>
                      <strong>
                        {post.title}
                      </strong>
                    </Link>                    
                  </ListItem>
                ))}
              </List>
              <Input   
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
                />
              <TextArea  
                value={this.state.body}
                onChange={this.handleInputChange}
                name="body"
                placeholder="What do you want to say? (required)"
                />
              <FormBtn 
                disabled={!(this.state.title && this.state.body)}
                onClick={this.handleFormSubmit}
                />
              {/* <div id="popup-container">
              <button className="NewPost" onClick={this.togglePopup.bind(this)}>New Post</button>
              {this.state.showPopup ? <Popup closePopup={this.togglePopup.bind(this)}/> : null}
              </div> */}
              </> 
            ) : (
              <h3>Loading...</h3>
            )}
             </>
         
        )
    }
  }

  export default Posts;

