const Profile = require('../models/profile');


const createProfile = async (req, res) => {
    try {
        const { name, email, mobile, profilePic, linkedinLink, githubLink, resume, education, projects, experiences } = req.body;
        
        // Validate input fields (e.g., check for required fields)

        // Create a new profile document
        const newProfile = new Profile({
            name,
            email,
            mobile,
            profilePic,
            linkedinLink,
            githubLink,
            resume,
            education,
            projects,
            experiences
        });

        // Save the new profile to the database
        await newProfile.save();

        res.status(201).json({ message: 'Profile created successfully', profile: newProfile });
    } catch (error) {
        console.error('Error creating profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to get a profile by ID
const getProfileById = async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.id);
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.json(profile);
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Export the controller functions
module.exports = {
    createProfile,
    getProfileById
};