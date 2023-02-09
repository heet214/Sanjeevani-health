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

//Routes
const goalRoutes = require('./routes/goalRoutes');
app.use('/api/goals', goalRoutes);

// this will overwrite the default express error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
