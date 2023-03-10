const Order = require('../models/orderModel');
const catchAsync = require('../utils/catchAsync');

exports.getOrders = catchAsync(async (req, res, next) => {
  const orders = await Order.find({
    'user._id': req.params.userId,
  }).sort({ date: -1 });

  if (orders)
    res.status(200).json({
      status: 'success',
      data: orders,
    });
});
