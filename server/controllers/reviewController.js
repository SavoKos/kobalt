const { default: mongoose } = require('mongoose');
const Food = require('../models/foodModel');
const Review = require('../models/reviewModel');
const catchAsync = require('../utils/catchAsync');

exports.createReview = catchAsync(async (req, res, next) => {
  const review = await Review.create({ ...req.body });

  const foodId = mongoose.Types.ObjectId(req.body.food);
  const averageRating = await Review.aggregate([
    { $match: { food: foodId } },
    { $group: { _id: null, avg: { $avg: '$rating' } } },
  ]);

  await Food.findByIdAndUpdate(req.body.food, {
    rating: Math.round((5 + averageRating[0].avg) / 2),
  });

  res.status(201).json({
    status: 'success',
    data: review,
  });
});
