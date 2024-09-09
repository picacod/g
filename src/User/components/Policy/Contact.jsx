import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      minHeight: '100vh', 
      padding: '20px', 
      backgroundColor: '#f9f9f9', 
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ 
        maxWidth: '600px', 
        width: '100%', 
        backgroundColor: '#ffffff', 
        padding: '20px', 
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)' 
      }}>
        <h1 style={{ fontSize: '2em', marginBottom: '20px', color: '#333' }}>Contact Us</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="name" style={{ marginBottom: '10px', color: '#555' }}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
          
          <label htmlFor="email" style={{ marginBottom: '10px', color: '#555' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
          
          <label htmlFor="subject" style={{ marginBottom: '10px', color: '#555' }}>Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{ padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
          
          <label htmlFor="message" style={{ marginBottom: '10px', color: '#555' }}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{ padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
          
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#007bff',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '1em'
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
