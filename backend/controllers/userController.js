const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const UserSchema = require('../models/userModel');

// @desc    Register new user
//@route    POST api/users
//@access   PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please fill all fields');
  }

  //Check if user already exists
  const userExists = await UserSchema.findOne({ email });
  if (userExists) {
    //res.status(200).json({ message: 'User already exists' }); *my solution

    res.status(404);
    throw new Error('User Already Exists');
  }

  // Hash Password using Bcrypt
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await UserSchema.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data');
  }
});

// @desc    Authenticate aa user
//@route    POST api/users/login
//@access   PUBLIC
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Please Enter All Fields');
  }

  // Check for user Email
  const user = await UserSchema.findOne({ email });

  // Now we check if the user exists and also compare the password by the bcrypt provided function called compare
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid Credentials');
  }
});

// @desc    Get user data
//@route    POST api/users/me
//@access   Private
const getMe = asyncHandler(async (req, res) => {
  const { _id, email, name } = await UserSchema.findById(req.user.id);
  res.status(200).json({ id: _id, email, name });
});

// Generate A Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

module.exports = { registerUser, loginUser, getMe };
