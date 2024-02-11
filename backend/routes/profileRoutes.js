const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// Route for fetching user profile
router.get('/', profileController.getProfileById);

// Route for updating user profile
router.post('/', profileController.createProfile);

module.exports = router;