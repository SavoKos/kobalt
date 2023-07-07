const express = require('express');
require('dotenv').config({ path: './local.env' });
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const AppError = require('./utils/AppError');
const errorController = require('./controllers/errorController');
const authRoutes = require('./routes/authRoutes');
const foodRoutes = require('./routes/foodRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const newsletterRoute = require('./routes/newsletterRoute');

const app = express();

const PORT = process.env.PORT;

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION. Shutting down...');
  server.close(() => process.exit(1));
});

const db = process.env.DATABASE.replace('<PASSWORD>', 'PqH74ebmvSlDMYFj');
mongoose.connect(
  db,
  () => {
    console.log('Connected');
  },
  (err) => console.log(err.message)
);

const origin =
  process.env.NODE_ENV === 'production'
    ? 'https://kobalt.savo-kos.com'
    : process.env.FRONTEND_PORT;

console.log(origin);

app.use(cors({ credentials: true, origin }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/user', authRoutes);
app.use('/api/v1/food', foodRoutes);
app.use('/api/v1/order', orderRoutes);
app.use('/api/v1/review', reviewRoutes);
app.use('/api/v1/newsletter', newsletterRoute);

app.all('*', (req, res, next) => {
  next(new AppError(`Route ${req.originalUrl} is not defined!`, 404));
});

app.use(errorController);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
