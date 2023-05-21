const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
    minlength: 1,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;