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

router.post('/login', upload.none(), authController.login);
router.post('/register', upload.none(), authController.signup);
router.get('/logout', authController.logout);
router.get('/protect', authController.protect);

router.get('/', getAll(User));

router
  .route('/:id')
  .get(getOne(User))
  .patch(updateOne(User))
  .delete(deleteOne(User));

module.exports = router;
