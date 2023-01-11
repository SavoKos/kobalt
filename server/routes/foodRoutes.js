const { Router } = require('express');
const {
  getCategories,
  getByCategory,
} = require('../controllers/foodController');

const { getAll, createOne, getOne } = require('../controllers/handlerFactory');
const Food = require('../models/foodModel');

const router = Router();

router.get('/category', getCategories);
router.route('/').get(getAll(Food)).post(createOne(Food));

router.post('/:category', getByCategory);
router.get('/:slug', getOne(Food));

module.exports = router;
