// This file used to connect to mongoDB and use mongoose
const mongoose = require('mongoose');

// all mongoose methods are asynchronous since they return a promise

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected to: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(err);

    process.exit(1);
  }
};

module.exports = {
  connectDB,
};

/*
The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code.
If code is omitted, exit uses either the 'success' code 0 or the value of process.exitCode if it has been set.
Node.js will not terminate until all the 'exit' event listeners are called.

To exit with a 'failure' code:



exit(1);
The shell that executed Node.js should see the exit code as 1.

Calling process.exit() will force the process to exit as quickly as possible,
even if there are still asynchronous operations pending that have not yet completed fully, including I/O operations 


*/
