const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController');

const { protect } = require('../middleware/authMiddleware');

// REGISTER USER
router.post('/', registerUser);

//Login
router.post('/login', loginUser);

// Get me information
router.get('/me', protect, getMe);

module.exports = router;
