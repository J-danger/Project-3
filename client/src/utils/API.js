import axios from "axios"

export default {
    getPosts: function (){
        return axios.get("/api/posts")
    },
      // Gets the book with the given id
    getPost: function(id) {
        return axios.get("/api/posts/" + id);
    },
    // Deletes the book with the given id
    deletePost: function(id) {
        return axios.delete("/api/posts/" + id);
    },
    // Saves a book to the database
    savePost: function(postData) {
        return axios.post("/api/posts", postData);
    },
    // // Saves a book to the database
    saveComment: function(id, postData) {
        return axios.put(`/api/posts/${id}/comment`, postData);
    },

    getComment: function(id) {
        return axios.get(`/api/posts/${id}/comment`);
    },

}