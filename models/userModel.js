const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name']
    // maxlength: [40, 'A tour name must have less or equal than 40 characters'],
    // minlength: [20, 'A user name must have less or equal than 20 characters']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email address'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email address']
  },
  photo: {
    type: String
  },
  password: {
    type: String,
    required: [true, 'A user must have a password'],
    minlength: [8, 'A password must have at least 8 characters']
    // select: false
  },
  confirmPassword: {
    type: String,
    required: [true, 'A user must have a confirm password']
    // validate: {
    //   validator: function(val) {
    //     return val === this.password;
    //   },
    //   message: `Confirm password should be equal to password`
    // }
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
