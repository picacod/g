import React from 'react';

function Cookie() {
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
        <h1 style={{ fontSize: '2em', marginBottom: '20px', color: '#333' }}>Cookie Policy</h1>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', color: '#333' }}>What Are Cookies?</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. Cookies help us improve your browsing experience by remembering your preferences and providing personalized content.
        </p>
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', color: '#333' }}>How We Use Cookies</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          We use cookies to enhance your experience on our website. This includes remembering your login information, personalizing content, and analyzing site traffic. We may also use cookies to display relevant advertisements to you.
        </p>
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', color: '#333' }}>Managing Cookies</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          You can control and manage cookies through your browser settings. However, disabling cookies may affect your ability to use certain features on our website. For more information on how to manage cookies, please refer to your browser’s help section.
        </p>
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', color: '#333' }}>Contact Us</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          If you have any questions about our Cookie Policy, please contact us at:
          <br />
          <a href="mailto:cookie@example.com" style={{ color: '#007bff' }}>cookie@example.com</a>
        </p>
      </div>
    </div>
  );
}

export default Cookie;
