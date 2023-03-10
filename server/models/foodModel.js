const mongoose = require('mongoose');
const validator = require('validator');
const slugify = require('slugify');

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please enter the name!'],
    unique: [true, 'Food with this name already exists!'],
  },
  slug: {
    type: String,
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
    type: 'Number',
    trim: true,
    required: [true, 'Please enter the price!'],
    min: [1, "Price can't be less than 1!"],
  },
  rating: {
    type: 'Number',
    trim: true,
    required: [true, 'Please enter the rating!'],
    min: [1, "Rating can't be less than 1"],
    max: [5, "Rating can't be more than 5"],
  },
  available: { type: Boolean, default: true },
});

FoodSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Food = mongoose.model('Food', FoodSchema);
module.exports = Food;
