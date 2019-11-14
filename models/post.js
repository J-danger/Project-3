const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  user: String,  
<<<<<<< HEAD
 // comment: String,ORIGINAL
  comment: [{
    type: String
  }] //TUTOR
=======
  comment: []
>>>>>>> 930aeb211e8f7af8b9ac84f23c451ebb65b67ccd
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
