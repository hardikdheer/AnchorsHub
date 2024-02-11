import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; 

function Register() {
    const [step, setStep] = useState(1); 
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const navigate = useNavigate(); 

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        
        console.log('Sending OTP to:', email);
        setStep(2);
    };

    const handleRegistrationSubmit = (e) => {
        e.preventDefault();
        
        console.log('Registering with:', { email, otp });
        
        navigate('/profile');
    };

    return (
        <div className="register-container">
            {step === 1 && (
                <form onSubmit={handleEmailSubmit} className="register-form">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Send OTP</button>
                </form>
            )}
            {step === 2 && (
                <form onSubmit={handleRegistrationSubmit} className="register-form">
                    <label>OTP:</label>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />
                    <button type="submit">Register</button>
                </form>
            )}
        </div>
    );
}

export default Register;