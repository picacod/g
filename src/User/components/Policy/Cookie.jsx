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
          Last updated September 09, 2024
        </p>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          Our website uses cookies to provide you with a better browsing experience, personalize content, and analyze our website traffic. This policy outlines what cookies are, how we use them, and your rights to manage them.
        </p>
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', color: '#333' }}>What Are Cookies?</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          Cookies are small text files stored on your device when you visit a website. These files allow the website to remember your actions and preferences, such as login details and other display preferences, over a period of time.
        </p>
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', color: '#333' }}>How We Use Cookies</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          We use cookies for several purposes, including:
          <ul>
            <li>To ensure the website functions properly</li>
            <li>To remember your preferences and settings</li>
            <li>To improve website performance by analyzing user behavior</li>
            <li>To deliver personalized content and advertisements</li>
          </ul>
        </p>
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', color: '#333' }}>Managing Cookies</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          You can manage or disable cookies through your browser settings. However, please note that disabling cookies may affect the functionality and performance of our website. For detailed instructions on managing cookies, please refer to your browser’s help documentation.
        </p>
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', color: '#333' }}>Contact Us</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          If you have any questions regarding this Cookie Policy or need further information, feel free to reach out to us at:
          <br />
          <a href="mailto:ancientsshadowsgame@gmail.com" style={{ color: '#007bff' }}>ancientsshadowsgame@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

export default Cookie;
