const asyncHandler = require('express-async-handler'); // in order to use , we wrap the whole function in asyncHandler

// when we use mongoose to interact with the database we get a promise back , hence it is imp to use async await , with which we can use traditional try catch too

const healthSchema = require('../models/healthModel');

// @desc    Get health
//@route    GET api/goals
//@access   Private
const getHealth = asyncHandler(async (req, res, next) => {
  const health = await healthSchema.find({ user: req.user.id });
  res.status(200).json(health);
});

// @desc    Create a goal
//@route    POST api/health
//@access   Private
const setHealth = asyncHandler(async (req, res, next) => {
  if (!req.body) {
    res.status(400);

    // we have provision to provide error to the user hence we use ERROR , now by default this gives back an html error file , snce we want to change this to json we add a middleware function
    throw new Error('Please ADD TEXT FIELD');
  }

  const health = await healthSchema.create({
    user: req.user.id,
    oxygen: req.body.oxygen,
    heartrate: req.body.heartrate,
  });

  res.status(200).json(health);
});

//@desc     Update a goal
//@route    PUT api/vitals/:id
//@access   Private
const updateHealth = asyncHandler(async (req, res, next) => {
  // const health = await healthSchema.findById(req.params.id);
  // if (!health) {
  //   res.status(400);
  //   throw new Error('health not found');
  // }

  const health = await healthSchema.findById(req.params.id);
  console.log('health', health);

  // Check if the user exists
  //   if (!user) {
  //     res.status(401);
  //     throw new Error('user not found');
  //   }

  //   //Make sure logged user , correct user matches
  //   if (health.user !== user.id) {
  //     res.status(401);
  //     throw new Error('user not matched');
  //   }

  const updatedHealth = await healthSchema.findByIdAndUpdate(
    req.params.id, // first parameter is the id to be updated
    {
      $push: {
        oxygen: { $each: [req.body.oxygen] },
        heartrate: { $each: [req.body.heartrate] },
      },
    }, // second parameter is the body to be with it will be updated
    { new: true } // this will create a new goal if it doesn't exist'
  );
  res.status(200).json(updatedHealth);
});

//@desc     Delete a goal
//@route    DELETE api/goals/:id
//@access   Private
const deleteHealth = asyncHandler(async (req, res, next) => {
  const goal = await GoalSchema.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error('Goal Does not exist');
  }

  // Check if the user exists
  if (!user) {
    res.status(401);
    throw new Error('user not found');
  }

  //Make sure logged user , correct user matches
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error('user not matched');
  }

  await goal.remove(); // another way we can delete a goal
  //const foundGoal = await GoalSchema.findByIdAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  updateHealth,
  setHealth,
  getHealth,
};
