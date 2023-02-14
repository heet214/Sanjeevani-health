const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const UserSchema = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // we check the headers which contain the authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      //Get token from header
      token = req.headers.authorization.split(' ')[1];

      //Verify Token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from Token
      req.user = await UserSchema.findById(decoded.id).select('-password'); // -password wont include the password
      next();
    } catch (err) {
      console.log(err);
      res.status(401);
      throw new Error('NOT AUTHORIZED');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('NOT AUTHORIZED NO TOKEN');
  }
});

module.exports = { protect };

/* Notes
token are formatted as 'Bearer wiowejwoiefj'  , so first we check if the authorization header has a bearer and then get the token from bearer header

the split splits the string into array item , remember the bearer format was 'bearer weewfew'
    0        1
[bearer wfwefjwief]

req.user adds new property to the request object
*/
