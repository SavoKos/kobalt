const { sendEmail } = require('../mail/email');
const User = require('../models/userModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.newsletterSubscribe = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return next(new AppError('User with this email does not exist!', 400));

  const emailText =
    'Thank you for subscribing to our email. We will send you an email updates!';
  sendEmail(req.body.email, 'Newsletter', emailText);

  res.status(200).json({
    status: 'success',
  });
});
