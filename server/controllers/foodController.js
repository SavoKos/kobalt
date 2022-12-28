const Food = require('../models/foodModel');
const catchAsync = require('../utils/catchAsync');

exports.createFood = catchAsync(async (req, res, next) => {
  const { name, category } = req.body;

  const food = await Food.findOne({ category });

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // 3) If everything ok, send token to client
  createSendToken(user, 200, req, res);
});
