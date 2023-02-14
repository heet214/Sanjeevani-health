const express = require('express');
const router = express.Router();
const {
  getHealth,
  updateHealth,
  setHealth,
} = require('../controllers/healthController');

const { protect } = require('../middleware/authMiddleware');

//  @desc we can still clean the below 4 rotues and group them by only / and /:id
//* router.route('/').get(getGoals).post(setGoal);
//* router.route('/:id').put(updateGoal).delete(deleteGoal);

router.get('/', protect, getHealth);

router.post('/', protect, setHealth);

router.put('/:id', protect, updateHealth);

//router.delete('/:id', protect, deleteGoal);

module.exports = router;
