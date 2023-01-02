const { Router } = require('express');
const {
  getCategories,
  getByCategory,
} = require('../controllers/foodController');

const { getAll, createOne } = require('../controllers/handlerFactory');
const Food = require('../models/foodModel');

const router = Router();

router.get('/category', getCategories);
router.route('/').get(getAll(Food)).post(createOne(Food));

router.get('/:category', getByCategory);

module.exports = router;
