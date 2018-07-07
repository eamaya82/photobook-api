const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const fields = {
  text: {
    type: String,
    required: true,
  },
};

const references = {
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'post',
    required: true,
  },
};

const comment = new Schema(Object.assign(fields, references), {
  timestamps: true,
});

module.exports = {
  Model: mongoose.model('comment', comment),
  fields,
  references,
};
