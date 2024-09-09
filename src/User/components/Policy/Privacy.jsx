import React from 'react';

function Privacy() {
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
        <h1 style={{ fontSize: '2em', marginBottom: '20px', color: '#333' }}>Privacy Policy</h1>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Cras placerat, urna sit amet vehicula dapibus, quam elit cursus lorem, nec posuere sem elit eu ante. Ut laoreet orci ut massa dictum, a pretium elit laoreet. Mauris euismod lectus eu elit dapibus, in egestas tortor vehicula.
        </p>
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', color: '#333' }}>Information We Collect</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          Nulla facilisi. Phasellus ut velit non nisi ultricies vehicula. Integer pharetra euismod urna, ac vestibulum quam condimentum nec. Sed facilisis convallis neque, a fermentum libero tempor nec.
        </p>
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', color: '#333' }}>How We Use Your Information</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          Aenean vitae bibendum nulla. Nam auctor cursus nisi, eget volutpat lectus pharetra id. Morbi non scelerisque odio. Sed gravida felis nec neque euismod, vel venenatis justo tincidunt.
        </p>
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', color: '#333' }}>Your Rights and Choices</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          Duis vel dolor sit amet nisl fermentum elementum. Cras ac turpis sit amet ipsum feugiat dictum. Donec ut massa vel odio dignissim malesuada ut ut purus. Donec tempor ligula nec eros fringilla, ut convallis orci scelerisque.
        </p>
        
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', color: '#333' }}>Contact Us</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
          For any questions regarding this Privacy Policy, please contact us at:
          <br />
          <a href="mailto:privacy@example.com" style={{ color: '#007bff' }}>privacy@example.com</a>
        </p>
      </div>
    </div>
  );
}

export default Privacy;
