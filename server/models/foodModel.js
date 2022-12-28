const mongoose = require('mongoose');
const validator = require('validator');

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please enter the name!'],
    unique: [true, 'Food with this name already exists!'],
  },
  category: {
    type: String,
    ref: 'Category',
    required: [true, 'Please enter the category!'],
  },
  image: {
    type: 'String',
    trim: true,
    required: [true, 'Please enter the image url!'],
    validate: [validator.isURL, 'Invalid URL!'],
  },
  price: {
    type: 'String',
    trim: true,
    required: [true, 'Please enter the price!'],
  },
  rating: {
    type: 'String',
    trim: true,
    required: [true, 'Please enter the rating!'],
  },
  available: { type: Boolean, default: true },
});

const Food = mongoose.model('Food', FoodSchema);
module.exports = Food;
