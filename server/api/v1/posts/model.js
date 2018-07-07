const mongoose = require('mongoose');

const post = {
  photo_url: String,
  description: String,
  location: String,
};

module.exports = mongoose.model('post', post);
