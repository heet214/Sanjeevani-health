//* Middle wares are functions that execute between the req res cycle

const errorHandler = (err, req, res, next) => {
  // We are checking for already existing status code , if we already have set the status code to 404 we'll just use that or we'll set the status code to 500 which is server error
  const statusCode = res.statusCode ? res.statusCode : 500;

  // stack msg gives us more info for the error like line numbers etc , but we only want it to be viewed if we are in development mode hence the check
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
