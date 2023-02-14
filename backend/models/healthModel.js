const mongoose = require('mongoose');

const healthSchema = mongoose.Schema(
  {
    // With every goal we have to know which user created it hence we are adding the user object here
    user: {
      type: mongoose.Schema.Types.ObjectId, // when we create a new resource we're gonna have the _id
      required: true,
      ref: 'UserSchema', // reference to the user schema
    },
    oxygen: [{ type: Number }],
    heartrate: [{ type: Number }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('healthSchema', healthSchema);
