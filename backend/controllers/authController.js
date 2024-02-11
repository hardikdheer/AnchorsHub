const User = require('../models/user');
const otpUtils = require('../utils/otputils');
const { validationResult } = require('express-validator');

// Controller function to handle user registration
exports.registerUser = async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email } = req.body;

        // Check if user already exists
        let user = await User.findOne({ email });

        // If user already exists, return error
        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }

        // Generate OTP
        const otp = otpUtils.generateOTP();

        // Create a new user instance
        user = new User({
            email,
            otp
        });

        // Save user to database
        await user.save();

        // Send OTP to user (e.g., via email or SMS)
        // In this example, we'll just send it in the response for testing purposes
        res.json({ otp });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Controller function to handle user login with OTP verification
exports.loginUser = async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, otp } = req.body;

        // Find user by email
        let user = await User.findOne({ email });

        // If user doesn't exist, return error
        if (!user) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
        }

        // Verify OTP
        if (otp !== user.otp) {
            return res.status(400).json({ errors: [{ msg: 'Invalid OTP' }] });
        }

        // OTP verified, login successful
        res.json({ msg: 'Login successful' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};