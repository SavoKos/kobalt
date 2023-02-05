const { Router } = require('express');
const {
  getCategories,
  getByCategory,
  deleteByCategory,
  categories,
} = require('../controllers/foodController');

const {
  getAll,
  createOne,
  getOne,
  deleteOne,
} = require('../controllers/handlerFactory');
const Food = require('../models/foodModel');

const router = Router();

router.get('/category', categories, getCategories);
router.route('/').get(getAll(Food)).post(createOne(Food));

router.delete('/:id', deleteOne(Food));

router
  .route('/category/:category')
  .post(getByCategory)
  .delete(categories, deleteByCategory);

router.get('/:slug', getOne(Food));

module.exports = router;
