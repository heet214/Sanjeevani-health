const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { connectDB } = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');

const port = process.env.PORT || 5000;
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
//Routes
const goalRoutes = require('./routes/goalRoutes');
const userRoutes = require('./routes/userRoutes');
const healthRoutes = require('./routes/healthRoutes');
app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);
app.use('/api/vitals', healthRoutes);

// this will overwrite the default express error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
