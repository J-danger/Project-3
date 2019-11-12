const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  user: String,  
  comment: {type: Schema.Types.ObjectId}
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
