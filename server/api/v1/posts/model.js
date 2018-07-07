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
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment',
    required: true,
  }],
};

const references = {
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
};

const post = new Schema(Object.assign(fields, references), {
  timestamps: true,
});

module.exports = {
  Model: mongoose.model('post', post),
  fields,
  references,
};
