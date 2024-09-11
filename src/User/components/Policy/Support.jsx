import React from 'react';

function Support() {
  return (
    <div style={{ 
        fontFamily: 'Arial, sans-serif', 
        minHeight: '100vh', 
        maxWidth: '100%', 
        padding: '20px', 
        backgroundColor: '#f9f9f9', 
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={{ 
          maxWidth: '800px', 
          width: '100%', 
          backgroundColor: '#ffffff', 
          padding: '20px', 
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}
      >
        <h1 style={{ fontSize: '2em', marginBottom: '20px', color: '#333' }}>Support</h1>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          Welcome to our support page. We're here to help you with any questions or issues you may have. Below are the different ways you can reach out to us and the resources available to assist you.
        </p>
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', color: '#333' }}>Contact Us</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          If you need assistance or have questions, please contact our support team:
          <ul>
            <li>Email: <a href="mailto:support@example.com" style={{ color: '#007bff' }}>ancientsshadowsgame@gmail.com</a></li>
            <li>Phone: <a href="tel:+1234567890" style={{ color: '#007bff' }}>+91 9074735094</a></li>
          </ul>
        </p>
        
        {/* <h2 style={{ fontSize: '1.5em', marginTop: '30px', color: '#333' }}>Frequently Asked Questions (FAQ)</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          Check out our FAQ section to find answers to common questions:
          <ul>
            <li><a href="/faq" style={{ color: '#007bff' }}>Visit our FAQ page</a></li>
          </ul>
        </p>
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', color: '#333' }}>Live Chat Support</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          For immediate assistance, you can use our live chat support:
          <ul>
            <li><a href="/live-chat" style={{ color: '#007bff' }}>Start a live chat</a></li>
          </ul>
        </p> */}
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', color: '#333' }}>Support Hours</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          Our support team is available during the following hours:
          <ul>
            <li>Monday to Friday: 9:00 AM - 6:00 PM</li>
            <li>Saturday: 10:00 AM - 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Support;
