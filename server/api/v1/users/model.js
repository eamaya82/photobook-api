const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const fields = {
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  photo_url: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    min: 6,
  },
  description: {
    type: String,
    default: '',
    trim: true,
  },
};

const user = new Schema(fields, {
  timestamps: true,
});

module.exports = {
  Model: mongoose.model('user', user),
  fields,
};
