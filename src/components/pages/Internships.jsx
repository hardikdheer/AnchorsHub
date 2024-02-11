import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Internships.css';
import { useNavigate } from 'react-router-dom';


function Internships() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        const options = {
            method: 'GET',
            url: 'https://jobs-api14.p.rapidapi.com/list',
            params: {
              query: 'Web Developer',
              location: 'United States',
              distance: '1.0',
              language: 'en_GB',
              remoteOnly: 'false',
              datePosted: 'month',
              employmentTypes: 'fulltime;parttime;intern;contractor',
              index: '0'
            },
            headers: {
              'X-RapidAPI-Key': '21c7e38474mshc5c0a4facb22d62p1b1374jsn04aaf03f9953',
              'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
            }
          };

        try {
            const response = await axios.request(options);
            console.log('Fetched jobs:', response.data);
            if (response.data?.jobs) {
                setJobs(response.data.jobs);
          
            }
        } catch (error) {
            console.error('Error fetching jobs:', error);
            setError('An error occurred while fetching data.');
        } finally {
            setLoading(false);
        }
    };
    const handleProfileSubmit = (e) => {
        e.preventDefault();
        
        
        
        navigate('/profile')
    };
    const handleApply = (jobId) => {
        
        console.log("Applying to job with ID:", jobId);
        navigate('/Applied')
       
    };

    return (
        <div className="internships-container">
            <button onClick={handleProfileSubmit} className="edit-profile-button">Edit Profile</button>
            <h1>Internships</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : jobs?.length > 0 ? (
                <ul className="jobs-list">
                    {jobs.map(jobs => (
                        <li key={jobs.id} className="job-item">
                            <p><strong>Title:</strong> Web Developer</p>

                            <p><strong>Location:</strong> {jobs.location}</p>
                           
                            <p><strong>Post Date:</strong> {jobs.datePosted}</p>
                            <button onClick={() => handleApply(jobs.id)} className="apply-button">Apply</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No jobs available.</p>
            )}
        </div>
    );
}

export default Internships;