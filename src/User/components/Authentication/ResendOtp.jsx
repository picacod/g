import React, { useState } from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function ResendOTP() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://gamebackend.pythonanywhere.com/api/resend_otp/', { email });
            setMessage(response.data.message);
 
            setError('');
           navigate('/verify-otp');
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred.');
            setMessage('');
        }
    };
  
      return (
        <div 
        style={{ 
            backgroundColor: 'black', 
            width: '100%', 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '0 15px' // Add padding for small screens
        }}
    >
        <div 
            style={{ 
                backgroundColor: 'black', 
                width: '100%', 
                maxWidth: '450px', // Set a max width for larger screens
                padding: '2rem', // Add padding inside the card
                borderRadius: '0px'
            }} 
            className='card shadow rounded-0'
        >
            <h5 className='mb-3 text-secondary'>Resend Otp</h5>
            <Form onSubmit={handleSubmit}>
                <FloatingLabel controlId="floatingInput" label="Email" className="rounded-0 mb-3">
                    <Form.Control
                        type="mail"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </FloatingLabel>
                <button 
                    type="submit" 
                    style={{ 
                        width: '40%', // Make button full-width
                        backgroundColor: '#171717', 
                        color: 'white' 
                    }} 
                    className='btn py-2 rounded-0'
                >
                    Send
                </button>
            </Form>
            {message && <p className='mt-3 text-success'>{message}</p>}
            {error && <p className='mt-3 text-danger'>{error}</p>}
        </div>
    </div>
    );
}

export default ResendOTP;