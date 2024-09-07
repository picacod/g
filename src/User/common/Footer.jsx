import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  const iconStyle = {
    border: '2px solid #b78846',  // Border color
    borderRadius: '50%',          // Circle shape
    padding: '10px',              // Padding inside the circle
    fontSize: '20px',             // Icon size
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
        <div className="row" >
          {/* First Column with Icons */}
          <div className="col-md-6 mb-4" >
            <p
              className="fs-1 text-uppercase"
              style={{
                background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Join our community
            </p>
            <div className="row">
              {/* First Column with Icons */}
              <div className="col-12 d-flex justify-content-start flex-wrap">
                <a href="https://discord.com" className="mx-2">
                  <i className="fab fa-discord fa-3x" style={iconStyle}></i>
                </a>
                <a href="https://twitch.tv" className="mx-2">
                  <i className="fab fa-twitch fa-3x" style={iconStyle}></i>
                </a>
                <a href="https://instagram.com" className="mx-2">
                  <i className="fab fa-instagram fa-3x" style={iconStyle}></i>
                </a>
                <a href="https://facebook.com" className="mx-2">
                  <i className="fab fa-facebook fa-3x" style={iconStyle}></i>
                </a>
                <a href="https://youtube.com" className="mx-2">
                  <i className="fab fa-youtube fa-3x" style={iconStyle}></i>
                </a>
                <a href="https://twitter.com" className="mx-2">
                  <i className="fab fa-twitter fa-3x" style={iconStyle}></i>
                </a>
              </div>
            </div>
          </div>

          {/* Other Columns */}
          <div className="col-md-2 mb-4" style={{ color: '#b78846' }}>
            <p className="fs-4 text-uppercase" style={{
              background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>About Us</p>
            <p><a href="/our-story" className=" text-decoration-none fs-5" style={{ color: '#b78846' }}>Our Story</a></p>
            <p><a href="/team" className=" text-decoration-none fs-5" style={{ color: '#b78846' }}>News & updates</a></p>
          </div>

          <div className="col-md-2 mb-4">
            <p className="fs-4 text-uppercase" style={{
              background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Support</p>
            <p><a href="/help-center" className=" text-decoration-none fs-5" style={{ color: '#b78846' }}>Help Center</a></p>
            <p><a href="/contact-us" className=" text-decoration-none fs-5" style={{ color: '#b78846' }}>Contact Us</a></p>
            <p><a href="/faq" className=" text-decoration-none fs-5" style={{ color: '#b78846' }}>Refund</a></p>
            <p><a href="/terms" className=" text-decoration-none fs-5" style={{ color: '#b78846' }}>Terms of Service</a></p>
          </div>

          <div className="col-md-2 mb-4">
            <p className="fs-4 text-uppercase" style={{
              background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Legal</p>
            <p><a href="/privacy-policy" className=" text-decoration-none fs-5" style={{ color: '#b78846' }}>Privacy Policy</a></p>
            <p><a href="/cookie-policy" className=" text-decoration-none fs-5" style={{ color: '#b78846' }}>Cookie Policy</a></p>
            <p><a href="/licenses" className=" text-decoration-none fs-5" style={{ color: '#b78846' }}>Licenses</a></p>
            {/* <p><a href="/accessibility" className="text-light text-decoration-none">Accessibility</a></p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
