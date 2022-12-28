const { Router } = require('express');
const { getCategories } = require('../controllers/foodController');

const {
  getAll,
  getOne,
  deleteOne,
  updateOne,
  createOne,
} = require('../controllers/handlerFactory');
const Food = require('../models/foodModel');
const routesFactory = require('./routesFactory');

const router = Router();

router.get('/category', getCategories);
router.route('/').get(getAll(Food)).post(createOne(Food));

router
  .route('/:id')
  .get(getOne(Food))
  .patch(updateOne(Food))
  .delete(deleteOne(Food));

module.exports = router;
