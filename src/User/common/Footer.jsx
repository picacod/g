import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useMediaQuery } from 'react-responsive';

function Footer() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const iconStyle = {
    border: '2px solid #b78846',  // Border color
    borderRadius: '50%',          // Circle shape
    padding: '10px',              // Padding inside the circle
    fontSize: isMobile ? '18px' : '20px',  // Adjust icon size for mobile
    color: '#b78846',             // Icon color
    margin: '0px',               // Space between icons
    width: '50px',
    height: '50px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="text-light" style={{ backgroundColor: 'rgba(50, 50, 50, 0)', backdropFilter: 'blur(15px)', padding: '40px 20px' }}>
      <div className="container">
        <div className="row">
          {/* First Column with Icons */}
          <div className="col-md-6 mb-4">
            <p
              className="fs-1 text-uppercase"
              style={{
                background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: isMobile ? '1.5em' : '2em'  // Adjust text size for mobile
              }}
            >
              Join our community
            </p>
            <div className="row">
              <div className="col-12 d-flex justify-content-start flex-wrap">
                <a href="https://discord.gg/5SXjJQxF" className="mx-2">
                  <i className="fab fa-discord" style={iconStyle}></i>
                </a>
                <a href="https://www.twitch.tv/ancientsshadows" className="mx-2">
                  <i className="fab fa-twitch" style={iconStyle}></i>
                </a>
                <a href="https://www.instagram.com/ancientsshadows/" className="mx-2">
                  <i className="fab fa-instagram" style={iconStyle}></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61565371525817" className="mx-2">
                  <i className="fab fa-facebook" style={iconStyle}></i>
                </a>
                <a href="https://www.youtube.com/@ancientsshadows" className="mx-2">
                  <i className="fab fa-youtube" style={iconStyle}></i>
                </a>
                <a href="https://x.com/ancientsshadows" className="mx-2">
                  <i className="fab fa-twitter" style={iconStyle}></i>
                </a>
              </div>
            </div>
          </div>

          {/* Other Columns */}
          <div className="col-md-2 mb-4" style={{ color: '#b78846' }}>
            <p className="text-uppercase" style={{
              background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: isMobile ? '1.2rem' : '1.5rem'  // Adjust text size for mobile
            }}>About Us</p>
            <p><Link to="/about" className="text-decoration-none fs-5" style={{ color: '#b78846' }}>Our Story</Link></p>
            <p><Link to="/team" className="text-decoration-none fs-5" style={{ color: '#b78846' }}>News & updates</Link></p>
          </div>

          <div className="col-md-2 mb-4">
            <p className="text-uppercase" style={{
              background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: isMobile ? '1.2em' : '1.5em'  // Adjust text size for mobile
            }}>Support</p>
            <p><Link to="/help-center" className="text-decoration-none fs-5" style={{ color: '#b78846' }}>Help Center</Link></p>
            <p><Link to="/contact-us" className="text-decoration-none fs-5" style={{ color: '#b78846' }}>Contact Us</Link></p>
            <p><Link to="/refund-policy" className="text-decoration-none fs-5" style={{ color: '#b78846' }}>Refund</Link></p>
            <p><Link to="/terms" className="text-decoration-none fs-5" style={{ color: '#b78846' }}>Terms of Service</Link></p>
          </div>

          <div className="col-md-2 mb-4">
            <p className="text-uppercase" style={{
              background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: isMobile ? '1.2em' : '1.5em'  // Adjust text size for mobile
            }}>Legal</p>
            <p><Link to="/privacy-policy" className="text-decoration-none fs-5" style={{ color: '#b78846' }}>Privacy Policy</Link></p>
            <p><Link to="/cookie-policy" className="text-decoration-none fs-5" style={{ color: '#b78846' }}>Cookie Policy</Link></p>
            <p><Link to="/licenses" className="text-decoration-none fs-5" style={{ color: '#b78846' }}>Licenses</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
