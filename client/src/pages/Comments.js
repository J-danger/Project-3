import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar"
import { CommentTextArea, FormBtn, UserName } from "../components/Form/Form";
import API from "../utils/API";
import CommentList from "../components/Thread/Thread.js"
import CommentListItem from "../components/Thread/Thread.js"

class Comments extends Component {
    state ={
        comment: [],
        cur_comment: "", //tutor
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
        this.setState({
            comment: this.state.comment.push(this.state.cur_comment)
        })//tutor
        if (this.state.cur_comment){ //tutor
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

                <CommentTextArea
                // value={this.state.comment} original
                value={this.state.cur_comment}//tutor
                onChange={this.handleInputChange}
                // name="comment" //original
                name="cur_comment" //tutor
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