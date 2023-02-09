const express = require('express');
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController');

//  @desc we can still clean the below 4 rotues and group them by only / and /:id
//* router.route('/').get(getGoals).post(setGoal);
//* router.route('/:id').put(updateGoal).delete(deleteGoal);

router.get('/', getGoals);

router.post('/', setGoal);

router.put('/:id', updateGoal);

router.delete('/:id', deleteGoal);

module.exports = router;
