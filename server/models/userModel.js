const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const AppError = require('../utils/AppError');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    minlength: [3, 'Minimum password length is 3 characters'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minlength: [6, 'Minimum password length is 6 characters'],
    trim: true,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!',
    },
  },
  admin: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    lowercase: true,
    unique: [true, 'User with this email already exists!'],
    validate: [validator.isEmail, 'Enter valid email!'],
    trim: true,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
});

userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.confirmPassword = undefined;
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

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
