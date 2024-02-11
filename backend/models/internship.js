const mongoose = require('mongoose');


const internshipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    ctc: String,
    experienceRequired: String,
   
});

// Create the Internship model
const Internship = mongoose.model('Internship', internshipSchema);

// Export the Internship model
module.exports = Internship;