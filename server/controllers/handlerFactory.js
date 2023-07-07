const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/AppError');
const User = require('../models/userModel');

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id).select('+password');

    if (!doc) {
      return next(new AppError('User with that ID does not exist!', 404));
    }

    Object.entries(req.body).forEach(([key, value]) => (doc[key] = value));

    await doc.save();
    doc.password = undefined;

    res.status(200).json({
      status: 'success',
      data: doc,
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create({ ...req.body });

    res.status(201).json({
      status: 'success',
      data: doc,
    });
  });

exports.getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findOne({ slug: req.params.slug });

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: doc,
    });
  });

exports.getAll = (Model, options) =>
  catchAsync(async (req, res, next) => {
    const query = Model.find(req.query);

    const doc = await query;
    console.log(doc);

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: doc,
    });
  });
