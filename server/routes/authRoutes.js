const { Router } = require('express');
const multer = require('multer');
const upload = multer();

const authController = require('../controllers/authController');
const {
  getAll,
  getOne,
  deleteOne,
  updateOne,
} = require('../controllers/handlerFactory');

const User = require('../models/userModel');

const router = Router();

router.post('/login', authController.login);
router.post('/register', authController.signup);
router.get('/protect', authController.protect);

router.get('/', getAll(User));

router
  .route('/:id')
  .get(getOne(User))
  .patch(updateOne(User))
  .delete(deleteOne(User));

module.exports = router;
