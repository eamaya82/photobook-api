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

const comment = new Schema(fields, {
  timestamps: true,
});

module.exports = {
  Model: mongoose.model('comment', comment),
  fields,
};
