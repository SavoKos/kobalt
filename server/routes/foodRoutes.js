const { Router } = require('express');

const {
  getAll,
  getOne,
  deleteOne,
  updateOne,
  createOne,
} = require('../controllers/handlerFactory');
const Food = require('../models/foodModel');

const router = Router();

router.route('/').get(getAll(Food)).post(createOne(Food));

router
  .route('/:id')
  .get(getOne(Food))
  .patch(updateOne(Food))
  .delete(deleteOne(Food));

module.exports = router;
