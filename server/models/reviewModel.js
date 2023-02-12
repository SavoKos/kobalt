const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'Review must have rating!'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    food: {
      type: mongoose.Schema.ObjectId,
      required: [true, 'Review must belong to food.'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      required: [true, 'Review must belong to a user'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
