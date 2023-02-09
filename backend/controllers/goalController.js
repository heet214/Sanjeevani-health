const asyncHandler = require('express-async-handler'); // in order to use , we wrap the whole function in asyncHandler

// when we use mongoose to interact with the database we get a promise back , hence it is imp to use async await , with which we can use traditional try catch too

const goalSchema = require('../models/goalModel');

// @desc    Get goals
//@route    GET api/goals
//@access   Private
const getGoals = asyncHandler(async (req, res, next) => {
  const goals = await goalSchema.find();
  res.status(200).json(goals);
});

// @desc    Create a goal
//@route    POST api/goals
//@access   Private
const setGoal = asyncHandler(async (req, res, next) => {
  if (!req.body.text) {
    res.status(400);

    // we have provision to provide error to the user hence we use ERROR , now by default this gives back an html error file , snce we want to change this to json we add a middleware function
    throw new Error('Please ADD TEXT FIELD');
  }

  const goal = await goalSchema.create({ text: req.body.text });

  res.status(200).json(goal);
});

//@desc     Update a goal
//@route    PUT api/goals/:id
//@access   Private
const updateGoal = asyncHandler(async (req, res, next) => {
  const goal = await goalSchema.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error('goal not found');
  }

  const updatedGoal = await goalSchema.findByIdAndUpdate(
    req.params.id, // first parameter is the id to be updated
    req.body, // second parameter is the body to be with it will be updated
    { new: true } // this will create a new goal if it doesn't exist'
  );
  res.status(200).json(updatedGoal);
});

//@desc     Delete a goal
//@route    DELETE api/goals/:id
//@access   Private
const deleteGoal = asyncHandler(async (req, res, next) => {
  const goal = await goalSchema.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error('Goal Does not exist');
  }

  // await goal.remove();  another way we can delete a goal
  const foundGoal = await goalSchema.findByIdAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
