import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import vid from '../../../assets/intro.mp4';
import logo from '../../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HomeContent from './HomeContent';
import Preloader from '../../../Preloader';

function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isBooked, setBooked] = useState(false);
  const [loadingVideo, setLoadingVideo] = useState(true); // Add loading state for video
  const user_id = sessionStorage.getItem('user_id');
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (user_id) {
      setLoggedIn(true);
      checkIfPreordered();
    } else {
      setLoggedIn(false);
    }
  }, [user_id]);

  const checkIfPreordered = async () => {
    setLoadingVideo(true); // Set loading to true before making the API call
    try {
      const response = await axios.get('https://gamebackend.pythonanywhere.com/api/check_preorder/', {
        params: { user_id }
      });
      if (response.data.preordered) {
        setBooked(true);
      } else {
        setBooked(false);
      }
    } catch (error) {
      console.error("Error checking pre-order status:", error);
    } finally {
      setLoadingVideo(false); // Set loading to false after the API call is completed
    }
  };

  const handleBooking = async () => {
    if (isLoggedIn) {
      try {
        const response = await axios.post('https://gamebackend.pythonanywhere.com/api/preorder/', {
          user_id
        });
        if (response.data.message === 'Pre-order successful.') {
          alert('Booked successfully');
          setBooked(true);
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.error("Error during booking:", error);
        alert('An error occurred while booking.');
      }
    } else {
      navigate('/login');
    }
  };

  // Video event handlers
  const handleVideoLoadStart = () => setLoadingVideo(true);
  const handleVideoCanPlay = () => setLoadingVideo(false);

  return (
    <div>
      {loadingVideo ? (
        <Preloader/>
      ) : null}
      <div style={{ position: 'relative', height: '100vh', fontFamily: '"Oswald", sans-serif' }}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadStart={handleVideoLoadStart} // Set loading state when video starts loading
          onCanPlay={handleVideoCanPlay}    // Set loading state when video can play
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
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 10), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 10))',
          zIndex: 1,
        }}></div>

        <div className="container h-100" style={{ position: 'relative', zIndex: 2 }}>
          <div className='h-100 d-flex flex-column align-items-center justify-content-center text-light'>
            <img data-aos="fade-up" width={700} className='img-fluid' src={logo} alt="" style={{ width: isMobile ? '65%' : '70%', maxWidth: isMobile ? '300px' : '700px', marginBottom: isMobile ? '20px' : '10px' }} />

            <div data-aos="fade-down"
              className='d-flex flex-column flex-md-row gap-2 justify-content-center'
              style={{ width: '100%', maxWidth: isMobile ? '320px' : 'auto' }}>
              <button style={{ fontSize: isMobile ? '0.8rem' : '1rem' }} className='btn btn-lg button-with-bg'>Watch the trailer</button>
              {
                !isBooked ? <button style={{ fontSize: isMobile ? '0.9rem' : '1rem' }} className='btn btn-lg button-with-bg' onClick={handleBooking}>PRE-ORDER NOW</button> : <button style={{ fontSize: isMobile ? '0.9rem' : '1rem' }} className='btn btn-lg button-with-bg' >Ordered <i className="fa-regular fa-lg fa-circle-check"></i></button>
              }
            </div>

          </div>
        </div>
      </div>
      <HomeContent />
    </div>
  );
}

export default Hero;
