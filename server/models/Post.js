const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  body: String,
  username: String,
  createdAt: String,
  title: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: String
    }
  ],
  likes: [
    {
      username: String,
      createdAt: String
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;