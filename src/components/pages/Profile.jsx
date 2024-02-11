import React, { useState, useEffect } from 'react';
import './Profile.css'; 
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: '',
    mobile: '',
    profilePic: null,
    linkedInLink: '',
    githubLink: '',
    resume: null,
    educationType: '',
    schoolCollegeName: '',
    startDate: '',
    endDate: '',
    projectName: '',
    projectDescription: '',
    projectType: '',
    projectLink: '',
    experienceType: '',
    companyName: '',
    companyWebsiteLink: '',
    role: '',
    experienceStartDate: '',
    experienceEndDate: '',
    coverLetter: null,
  });
  const [totalCoins, setTotalCoins] = useState(0);

  useEffect(() => {
    const coinValues = {
      name: 2,
      mobile: 10,
      profilePic: 5,
      linkedInLink: 3,
      githubLink: 5,
      resume: 20,
      educationType: 5,
      schoolCollegeName: 5,
      startDate: 2,
      endDate: 2,
      projectName: 5,
      projectDescription: 6,
      projectType: 4,
      projectLink: 10,
      experienceType: 5,
      companyName: 10,
      companyWebsiteLink: 10,
      role: 8,
      experienceStartDate: 2,
      experienceEndDate: 2,
      coverLetter: 20,
    };
    let coins = 0;
    Object.keys(profile).forEach(key => {
      if (profile[key] && key !== 'profilePic' && key !== 'resume' && key !== 'coverLetter') {
        coins += coinValues[key] || 0;
      }
    });
    setTotalCoins(coins);
  }, [profile]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      for (const key in profile) {
        formData.append(key, profile[key]);
      }
      formData.append('totalCoins', totalCoins); 

      
      const response = await fetch('/profile', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to save profile data');
      }

      console.log('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
    navigate('/internships');
  };
  

  return (
    <div className="profile-container">
      <h2>Edit Profile</h2>
      <p>Total Coins Earned: {totalCoins}</p>
      <form onSubmit={handleSubmit} className="profile-form">
        
        {Object.keys(profile).map((key) => (
          <div key={key} className="input-group">
            <label>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</label>
            {key === 'profilePic' || key === 'resume' || key === 'coverLetter' ? (
              <input
                type="file"
                name={key}
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleChange}
                required={key === 'profilePic' || key === 'resume' || key === 'coverLetter'} 
              />
            ) : (
              <input
                type={key.includes('Link') || key === 'email' ? 'url' : 'text'}
                name={key}
                value={profile[key]}
                onChange={handleChange}
                required={!profile[key]} 
              />
            )}
          </div>
        ))}
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default Profile;