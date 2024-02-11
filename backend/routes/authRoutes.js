const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for user registration with email and OTP
router.post('/register', authController.registerUser);

// Route for user login with email and OTP
router.post('/login', authController.loginUser);

module.exports = router;