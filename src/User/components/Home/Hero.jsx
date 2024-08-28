import React, { useEffect, useState } from 'react';
import HomeContent from './HomeContent';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import vid from '../../../assets/intro.mp4'
import logo from '../../../assets/logo.png'


function Hero() {

  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with a custom duration
  }, []);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as per your mobile view
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (

    <div>
      <div style={{ position: 'relative', height: '100vh' }}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video
        </video>

        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 5))',
          zIndex: 1,
        }}></div>

        <div className="container h-100" style={{ position: 'relative', zIndex: 2 }}>
          <div className='h-100 d-flex flex-column align-items-center justify-content-center text-light'>
            {/* <h1   style={{ fontSize: '5rem', fontFamily: 'fantasy', color: 'yellow' }}>Ancient Shadows</h1> */}
            <img data-aos="fade-up" width={700} className='img-fluid' src={logo} alt="" />

            <h1 data-aos="fade-down" className='mb-4 fw-bold' style={{ fontSize: '2rem' }}>Available for PS5 and Xbox Series X|S</h1>
            <h5 data-aos="fade-down" >Experience entertainment blockbusters , Ancient Shadows.</h5>
            <div data-aos="fade-down"
              className={`d-${isMobile ? 'grid' : 'flex'} gap-2 mt-2`}
              style={{ width: isMobile ? '100%' : 'auto' }}>
              <button className='btn btn-lg btn-outline-light rounded-0'>Watch the trailer</button>
              <button className='btn btn-lg btn-outline-light rounded-0'>PRE-ORDER NOW</button>
            </div>
            <p data-aos="fade-down" className='mt-2 text-warning'>AVAILABLE 12 - 8 - 2026</p>

          </div>
        </div>
      </div>
      <HomeContent />
    </div>
  );
}

export default Hero;
