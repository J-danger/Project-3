import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar"
import { CommentTextArea, FormBtn, UserName } from "../components/Form/Form";
import API from "../utils/API";
import CommentList from "../components/Thread/Thread.js"
import CommentListItem from "../components/Thread/Thread.js"

class Comments extends Component {
    state ={
        comment: [],
        title:"",
        body:""

    }
    
    componentDidMount() {
        
        API.getPost(this.props.match.params.id)       
          .then(res => {console.log(res.data); this.setState({ comment: res.data.comment, title: res.data.title, body: res.data.body })})
          .catch(err => console.log(err));
      }

    loadComments = () => {
    API.getComment()
        .then(res =>
            this.setState({comment: res.data.comment }))
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
        
        if (this.state.comment){
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
                <h3>{this.state.title}</h3>
                <p>{this.state.body}</p>

              <CommentList >
                    {this.state.comment}
              </CommentList>





                {/* <div id="replies">
                <CommentList />
                <CommentListItem />
                    
                </div>               */}
                <CommentTextArea
                value={this.state.comment}
                onChange={this.handleInputChange}
                name="comment"
                placeholder="Reply here"
                 />
                <FormBtn 
                disabled={!(this.state.comment)}
                onClick={this.handleFormSubmit}
                />
          </>
          )
      }
}

export default Comments