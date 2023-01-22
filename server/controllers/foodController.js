{/* prettier-ignore */}
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

exports.getByCategory = catchAsync(async (req, res, next) => {
  const { minPrice, maxPrice, minStars, maxStars, onlyAvailable } = req.body;

  let food = await Food.aggregate([
    {
      $match: {
        $and: [
          { price: { $gte: minPrice || 1, $lte: maxPrice || 100 } },
          { rating: { $gte: minStars || 1, $lte: maxStars || 5 } },
          req.params.category !== 'all'
            ? { category: req.params.category }
            : {},
          onlyAvailable ? { available: true } : {},
        ],
      },
    },
  ]);

  if (!food) {
    return next(new AppError('No food found with that category', 404));
  }

  if (food.length === 0) food = [{}];

  res.status(200).json({
    status: 'success',
    count: food.length,
    data: food,
  });
});
