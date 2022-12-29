const Food = require('../models/foodModel');
const catchAsync = require('../utils/catchAsync');

exports.getCategories = catchAsync(async (req, res, next) => {
  const food = await Food.find({}).select('category image -_id');
  const categories = [...new Set(food.map((food) => food.category))];
  const obj = categories.map((category) =>
    food.find((food) => food.category === category)
  );

  if (food)
    res.status(200).json({
      status: 'success',
      results: food.length,
      data: obj,
    });
});
