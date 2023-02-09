const asyncHandler = require('express-async-handler'); // in order to use , we wrap the whole function in asyncHandler

//! when we use mongoose to interact with the database we get a promise back , hence it is imp to use async await , with which we can use traditional try catch too

// @desc    Get goals
//@route    GET api/goals
//@access   Private
const getGoals = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: 'GET GOALS' });
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
  res.status(200).json({ message: `CREATE GOALS` });
});

//@desc     Update a goal
//@route    PUT api/goals/:id
//@access   Private
const updateGoal = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  res.status(200).json({ message: `UPDATE ${req.params.id} GOALS` });
});

//@desc     Delete a goal
//@route    DELETE api/goals/:id
//@access   Private
const deleteGoal = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: `DELETE ${req.params.id} GOALS` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
