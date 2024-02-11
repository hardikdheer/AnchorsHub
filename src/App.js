// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile.jsx';
import Internships from './components/pages/Internships';
import Applied from './components/pages/Applied';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/applied" element={<Applied />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;