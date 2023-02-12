const { Router } = require('express');
const { createOne } = require('../controllers/handlerFactory');
const {
  getOrders,
  getOrderByFoodSlug,
} = require('../controllers/orderController');

const Order = require('../models/orderModel');

const router = Router();

router.get('/:userId', getOrders);
router.post('/', createOne(Order));

module.exports = router;
