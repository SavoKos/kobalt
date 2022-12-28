const Food = require('../models/foodModel');
const catchAsync = require('../utils/catchAsync');

exports.getCategories = catchAsync(async (req, res, next) => {
  const food = await Food.find({}).select('category -_id');
  const categories = [...new Set(food.map((food) => food.category))];

  if (food)
    res.status(200).json({
      status: 'success',
      results: food.length,
      data: categories,
    });
});
