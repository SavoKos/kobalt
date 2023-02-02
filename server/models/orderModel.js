const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: {
    type: Object,
    required: [true, 'Please enter the user data!'],
  },
  food: {
    type: Object,
    required: [true, 'Please enter the food data!'],
  },
  discounted: {
    type: Boolean,
    required: [true, 'Please check if discounted!'],
  },
  total: {
    type: String,
    required: [true, 'Please enter total price!'],
  },
  date: {
    type: String,
    default: new Date().toISOString(),
  },
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
