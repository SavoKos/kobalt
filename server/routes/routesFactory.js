const { Router } = require('express');
const multer = require('multer');
const upload = multer();

const {
  getAll,
  getOne,
  deleteOne,
  updateOne,
  createOne,
} = require('../controllers/handlerFactory');

const routesFactory = (Model) => {
  const router = Router();

  router
    .route('/')
    .get(getAll(Model))
    .post(upload.single('image'), createOne(Model));

  router
    .route('/:id')
    .get(getOne(Model))
    .patch(upload.single('image'), updateOne(Model))
    .delete(deleteOne(Model));

  return router;
};

module.exports = routesFactory;
