const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const AppError = require('../utils/AppError');

const userSchema = new mongoose.Schema({
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minlength: [6, 'Minimum password length is 6 characters'],
    trim: true,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!',
    },
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, 'Enter valid email!'],
    trim: true,
  },
});

userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.statics.login = async function (email, password, next) {
  const user = await this.findOne({ email }).select('+password');
  if (user) {
    const auth = await bcrypt.compare(password, user.password); //password
    if (auth) return user;

    next(new AppError('Incorrect password', 401));
  }
  next(new AppError('Incorrect email', 401));
};

const User = mongoose.model('User', userSchema);
module.exports = User;
