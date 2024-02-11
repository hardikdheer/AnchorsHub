const Internship = require('../models/internship');


const getAllInternships = async (req, res) => {
    try {
        const internships = await Internship.find();
        res.json(internships);
    } catch (error) {
        console.error('Error fetching internships:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const createInternship = async (req, res) => {
    try {
        const { title, company, location, type, postDate } = req.body;
        
        
        const newInternship = new Internship({
            title,
            company,
            location,
            type,
            postDate
        });

        // Save the new internship to the database
        await newInternship.save();

        res.status(201).json({ message: 'Internship created successfully', internship: newInternship });
    } catch (error) {
        console.error('Error creating internship:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Export the controller functions
module.exports = {
    getAllInternships,
    createInternship
};