import React from 'react';

function Refund() {
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
        <h1 style={{ fontSize: '2em', marginBottom: '20px', color: '#333' }}>Refund Policy</h1>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          Thank you for shopping with us. We strive to provide high-quality products and services. If you are not completely satisfied with your purchase, you may be eligible for a refund based on the following conditions:
        </p>
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', color: '#333' }}>Eligibility for Refund</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          To be eligible for a refund, you must meet the following criteria:
          <ul>
            <li>The request for a refund must be made within 30 days of the purchase date.</li>
            <li>The product must be in its original condition, unused, and in the original packaging.</li>
            <li>A valid receipt or proof of purchase must be provided.</li>
          </ul>
        </p>
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', color: '#333' }}>How to Request a Refund</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          To request a refund, please follow these steps:
          <ol>
            <li>Contact our customer service team at <a href="mailto:support@example.com" style={{ color: '#007bff' }}>support@example.com</a> with your order details.</li>
            <li>Provide your reason for requesting a refund along with any relevant supporting information.</li>
            <li>Our team will review your request and provide instructions on how to return the product if applicable.</li>
          </ol>
        </p>
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', color: '#333' }}>Refund Processing</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          Once we receive and inspect the returned product, we will process your refund. Refunds will be issued to the original payment method used for the purchase. Please allow up to 7-10 business days for the refund to be reflected in your account.
        </p>
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', color: '#333' }}>Contact Us</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          If you have any questions about our refund policy or need further assistance, please contact us at:
          <br />
          <a href="mailto:support@example.com" style={{ color: '#007bff' }}>support@example.com</a>
        </p>
      </div>
    </div>
  );
}

export default Refund;
