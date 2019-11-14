import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar"
import { CommentTextArea, FormBtn } from "../components/Form/Form";
import API from "../utils/API";
import CommentList from "../components/Thread/Thread.js"
import CommentListItem from "../components/Thread/Thread.js"
import  "./Comments.css"

class Comments extends Component {
    state ={
        comment: [],
        cur_comment: "",
        title:"",
        body:""

    }
    
    componentDidMount() {
        
        API.getPost(this.props.match.params.id)       
          .then(res => {console.log(res.data); this.setState({ comment: res.data.comment, title: res.data.title, body: res.data.body })})
          .catch(err => console.log(err));
      }

    loadComments = () => {
    API.getComment(this.props.match.params.id)
        .then(res =>
            this.setState({comment: res.data.comment })
            
            )
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
       this.setState({
           comment: this.state.comment.push(this.state.cur_comment)
       })
       if (this.state.cur_comment){ 
           API.saveComment(this.props.match.params.id,{
           comment: this.state.comment
           })
           this.loadComments()
       }
    };   

      render(){
          return(
              <>   
              <NavBar />   
              {this.state.comment.length ? (  
                  <>
                  
                <div id="originalPost">
                <div id="originalTitle">
                <h3>{this.state.title}</h3>
                </div>
                <div id="originalBody">
                <p>{this.state.body}</p>
                </div>
                </div>
                

              <CommentList >
                 
              {this.state.comment.map(comment => (
                  <CommentListItem key={comment._id} data-attribute={comment._id}>                   
                       {comment}
                  </CommentListItem>
                ))}
                    
                
                      
              </CommentList>
                <div id="postForm">
                <div id="postContainer">
                <CommentTextArea
                value={this.state.cur_comment}
                onChange={this.handleInputChange}
                name="cur_comment"
                placeholder="Reply here"
                 />
                <FormBtn 
                disabled={!(this.state.comment)}
                onClick={this.handleFormSubmit}
                />
                </div>
                </div>
                </>
              ) : (
                <h3>Loading...</h3>  
              )}
            </>
          )
      }
}

export default Comments