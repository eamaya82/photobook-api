const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

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

user.methods.toJSON = function toJSON() {
  const doc = this.toObject();
  delete doc.password;
  return doc;
};

user.pre('save', function save(next) {
  if (this.isNew || this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSalt());
  }
  next();
});

user.methods.verifyPassword = function verifyPassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = {
  Model: mongoose.model('user', user),
  fields,
};
