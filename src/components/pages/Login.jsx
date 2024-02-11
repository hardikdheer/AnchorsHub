import React, { useState } from 'react';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const navigate = useNavigate(); 

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        
        console.log('Sending OTP to:', email);
        setOtpSent(true);
        
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        
        console.log('Verifying OTP:', otp);
       
        navigate('/internships')
    };

    return (
        <div className="login-container">
            {!otpSent ? (
                <form onSubmit={handleEmailSubmit} className="login-form">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Send OTP</button>
                </form>
            ) : (
                <form onSubmit={handleOtpSubmit} className="login-form">
                    <label>OTP:</label>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
}

export default Login;