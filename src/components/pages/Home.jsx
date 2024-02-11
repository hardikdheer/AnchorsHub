import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Student Platform</h1>
      <p>Connect, Learn, and Grow</p>
      <div className="buttons-container">
        <Link to="/register" className="btn btn-primary">Register Now</Link>
        <Link to="/login" className="btn btn-secondary">Login</Link>
        <p>Explore internships, courses, and project opportunities tailored for students.</p>
        <Link to="/internships" className="btn btn-primary">View Internships</Link>
      </div>
    </div>
  );
};

export default Home;