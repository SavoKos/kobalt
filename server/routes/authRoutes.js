const { Router } = require('express');

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
router.get('/protected', authController.protect);
router.get('/bytoken', authController.getUserByToken);
router.get('/admin', authController.admin);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.get('/', getAll(User));

router
  .route('/:id')
  .get(getOne(User))
  .patch(updateOne(User))
  .delete(deleteOne(User));

module.exports = router;
