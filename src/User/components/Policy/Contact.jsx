import React, { useState } from 'react';
import axios from 'axios';
import bg from '../../../assets/bg-2.jpg';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://gamebackend.pythonanywhere.com/api/contact/', formData)
          .then(response => {
            setFormStatus('success');
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: '',
            });
          })
          .catch(error => {
            setFormStatus('error');
          });
    };

    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
        }}>
            {/* Background Blur */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(8px)',  // Blur effect for background
                zIndex: 0,
            }}></div>

            {/* Form Content with Blurred Black Shade */}
            <div style={{
                position: 'relative',
                maxWidth: '600px',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',  // Semi-transparent black background
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                zIndex: 1, // Ensure the form stays on top
                backdropFilter: 'blur(5px)',  // Apply a subtle blur effect to the form background
                color: '#fff'  // White text for contrast
            }}>
                <h1 className='text-center' style={{ fontSize: '2em', marginBottom: '20px', color: '#b78846' }}>Contact Us</h1>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="name" style={{ marginBottom: '10px', color: '#b78846' }}>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ 
                            padding: '10px', 
                            marginBottom: '20px', 
                            borderRadius: '4px', 
                            border: '1px solid #0000',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            color: '#fff', // White text for contrast
                            backdropFilter: 'blur(1px)' // Apply blur effect to the input field
                        }}
                    />
                    
                    <label htmlFor="email" style={{ marginBottom: '10px', color: '#b78846' }}>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ 
                            padding: '10px', 
                            marginBottom: '20px', 
                            borderRadius: '4px', 
                            border: '1px solid #0000',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            color: '#b78846', // White text for contrast
                            backdropFilter: 'blur(1px)' // Apply blur effect to the input field
                        }}
                    />
                    
                    <label htmlFor="subject" style={{ marginBottom: '10px', color: '#b78846' }}>Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        style={{ 
                            padding: '10px', 
                            marginBottom: '20px', 
                            borderRadius: '4px', 
                            border: '1px solid #0000',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            color: '#fff', // White text for contrast
                            backdropFilter: 'blur(1px)' // Apply blur effect to the input field
                        }}
                    />
                    
                    <label htmlFor="message" style={{ marginBottom: '10px', color: '#b78846' }}>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        style={{ 
                            padding: '10px', 
                            marginBottom: '20px', 
                            borderRadius: '4px', 
                            border: '1px solid #0000',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            color: '#fff', // White text for contrast
                            backdropFilter: 'blur(1px)' // Apply blur effect to the input field
                        }}
                    />
                    
                    <div className='w-100 d-flex justify-content-center'>
                    <button
                        type="submit"
                        style={{
                            
                        }}
                        className='golden-button w-50 text-center mt-3'
                    >
                        Send Message
                    </button>
                    </div>
                </form>
                {formStatus === 'success' && <p className='text-center mt-3' style={{ color: 'green' }}>Your message has been sent successfully!</p>}
                {formStatus === 'error' && <p className='text-center mt-3' style={{ color: 'red' }}>There was an error sending your message.</p>}
            </div>
        </div>
    );
}

export default Contact;
