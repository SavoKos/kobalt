{/* prettier-ignore */}
const Food = require('../models/foodModel');
const Review = require('../models/reviewModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.categories = catchAsync(async (req, res, next) => {
  const food = await Food.find({}).select('category image -_id');
  const categories = [...new Set(food.map((food) => food.category))];
  const obj = categories.map((category) =>
    food.find((food) => food.category === category)
  );
  req.body.categories = obj;
  next();
});

exports.getCategories = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: req.body.categories,
  });
});

exports.getByCategory = catchAsync(async (req, res, next) => {
  const { minPrice, maxPrice, minStars, maxStars, onlyAvailable, search } =
    req.body;

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
          search ? { name: new RegExp(search, 'i') } : {},
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

exports.deleteByCategory = catchAsync(async (req, res, next) => {
  if (req.body.categories.length < 2)
    return next(
      new AppError(
        "You can't delete all the categories. Add more to delete this one!",
        500
      )
    );

  await Food.deleteMany({ category: req.params.category });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.getSingleFood = catchAsync(async (req, res, next) => {
  const food = await Food.findOne({ slug: req.params.slug });
  const review = await Review.find({ food: food._id });

  if (!food) {
    return next(new AppError('No food found!', 404));
  }

  res.status(200).json({
    status: 'success',
    count: food.length,
    data: { food, review },
  });
});
