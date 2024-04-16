
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST route for user signup
router.post('/signup', userController.signup);

// POST route for user login
router.post('/login', userController.login);

module.exports = router;
