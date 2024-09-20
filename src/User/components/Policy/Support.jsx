import React, { useEffect } from 'react';
import Footer from '../../common/Footer';
import { Link } from 'react-router-dom';

function Support() {
  

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  return (
    <>
    <div style={{ 
        fontFamily: 'Arial, sans-serif', 
        minHeight: '100vh', 
        maxWidth: '100%', 
        padding: '20px', 
        backgroundColor: '#0000', 
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={{ 
          width: '100%',
          backgroundColor: 'rgba(55, 55, 55, 0.3)', // Slight transparency for better blur effect
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          backdropFilter: 'blur(10px)', // Blur effect
          WebkitBackdropFilter: 'blur(10px)', // Safari support
          color:'#b78846'
        }}
        className='container'
      >
        <Link to={'/'}><p>Back</p></Link>
        <h1 style={{ fontSize: '2em', marginBottom: '20px', background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>Support</h1>
        <p style={{ fontSize: '1em', lineHeight: '1.6', }}>
          Welcome to our support page. We're here to help you with any questions or issues you may have. Below are the different ways you can reach out to us and the resources available to assist you.
        </p>
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',}}>Contact Us</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6',  }}>
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
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>Support Hours</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6'}}>
          Our support team is available during the following hours:
          <ul>
            <li>Monday to Friday: 9:00 AM - 6:00 PM</li>
            <li>Saturday: 10:00 AM - 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Support;
