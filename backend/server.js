const express = require('express');

const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();

const { errorHandler } = require('./middleware/errorMiddleware');
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
