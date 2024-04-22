
const express = require('express');
const router = express.Router();
const {signupUser, loginUser} = require('../controllers/userController.jsx');

// POST route for user signup
router.post('/signup', signupUser);

// POST route for user login
router.post('/login', loginUser);

module.exports = router;
