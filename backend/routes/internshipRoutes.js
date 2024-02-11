const express = require('express');
const router = express.Router();
const internshipController = require('../controllers/internshipController');

// Route for fetching internship listings
router.get('/internships', internshipController.getAllInternships);

module.exports = router;