const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const fields = {
  photo_url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
    trim: true,
  },
  location: {
    type: String,
    default: '',
    trim: true,
  },
};

const post = new Schema(fields, {
  timestamps: true,
});

module.exports = {
  Model: mongoose.model('post', post),
  fields,
};
