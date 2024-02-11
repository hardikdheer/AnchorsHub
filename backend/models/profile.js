const mongoose = require('mongoose');

// Define the profile schema
const profileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    // Add other fields as needed
});

// Create the Profile model
const Profile = mongoose.model('Profile', profileSchema);

// Export the Profile model
module.exports = Profile;