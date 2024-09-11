import React, { useState, useEffect } from 'react';
import darkbg from '../../assets/bg-2.jpg';
import ram from '../../assets/ram.png';
import ico from '../../assets/game-icon.png';
import prevButton from '../../assets/left.png'; // Your previous button image
import nextButton from '../../assets/right.png'; // Your next button image
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap'; // Import Bootstrap components
// Import Swiper React components/styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Footer from '../common/Footer';

function Purchase() {
  const [weapons, setWeapons] = useState([]);
  const [isReadMore, setIsReadMore] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();
  const { characterId, characterDetails } = location.state || {};
  const [isLoading, setIsLoading] = useState(true);
  const [skills, setSkills] = useState([]);

  const [show, setShow] = useState(false); // State to control the modal

  const handleClose = () => setShow(false); // Function to close the modal
  const handleShow = () => setShow(true);  // Function to show the modal

  // useEffect(() => {
  //   fetchWeapons();

  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  useEffect(() => {
    if (characterId) {
      setIsLoading(true);
      axios.get(`https://gamebackend.pythonanywhere.com/api/character_weapons/?character_id=${characterId}`)
        .then(response => {
          setWeapons(response.data);
        })
        .catch(error => {
          console.error('Error fetching weapons data:', error);
        })
        .finally(() => {
          setIsLoading(false);
        });

        axios.get(`https://gamebackend.pythonanywhere.com/api/character_skills/?character_id=${characterId}`)
        .then(response => {
          setSkills(response.data);
          console.log('sjhbujhb',skills);
          
        })
        .catch(error => {
          console.error('Error fetching skills data:', error);
        })
        .finally(() => {
          setIsLoading(false);
        });

    }
  }, [characterId]);


  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };


  const fullText = characterDetails.desc;

  const truncatedText = `${fullText.substring(0, 150)}...`; // Limit the display to around 150 characters (adjust as needed)


  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Fixed Blurred Background Image */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundImage: `url(${darkbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(5px)', // Blur only the background
          zIndex: -1,
        }}
      ></div>

      {/* Content Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100vh',
          overflowY: 'auto', // Allow scrolling if content overflows
          padding: '2rem',
        }}
      >
        <div className="container" style={{ minHeight: '100vh', maxHeight: 'fit-content', paddingTop: '2rem' }}>
          <div className="row h-100">
            <div className="col-lg-6 mt-3">
              <img className="img-fluid" src={`https://gamebackend.pythonanywhere.com${characterDetails.img}`} alt="RAM" />
            </div>
            <div className="col-lg-6 position-relative">
              <div className="w-100 h-100 d-flex flex-column">
                <h1
                  className="fs-1 text-uppercase mt-3"
                  style={{
                    background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Ram
                </h1>
                <div className="decorative-line mt-1">
                  <div className="decoration decoration-left"></div>
                  <div className="decoration decoration-right"></div>
                </div>
                <p className="fs-5" style={{
                  background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {isMobile ? (isReadMore ? fullText : truncatedText) : fullText}
                  {isMobile && (
                    <span
                      onClick={toggleReadMore}
                      style={{ color: '#b78846', cursor: 'pointer', fontWeight: 'bold', marginLeft: '5px' }}
                    >
                      {isReadMore ? ' Show Less' : ' Read More'}
                    </span>
                  )}
                </p>
                <div className="d-flex align-items-center">
                  <p className="fs-1 mb-0 me-3" style={{ color: '#f0c95b' }}>
                    ₹499
                  </p>
                  <button role="button" className="golden-button">
                    <span className="golden-text" onClick={handleShow}>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
            {/* frame */}
            <div className="border-frame mt-5">
              <div className="inner-frame" style={{ minHeight: '25rem', maxHeight: 'fit-content' }}>
                <div className="w-100 h-100 d-flex flex-column">
                  {/* Swiper Slider for Weapons */}
                  <div className="weapon w-100 h-100">
                    <Swiper
                      spaceBetween={10}
                      slidesPerView={1}
                      loop={true}
                      navigation={{
                        prevEl: '.swiper-button-pre',
                        nextEl: '.swiper-button-nex'
                      }} // Custom navigation
                      autoplay={{ delay: 2500, disableOnInteraction: false }}
                      modules={[Navigation, Autoplay]} // Removed Pagination module
                      className="swiper-container"
                    >
                      {weapons.map((weapon, index) => (
                        <SwiperSlide key={index}>
                          <div className="row w-100">
                            <div className="col-12 col-md-4 d-flex flex-column align-items-center justify-content-center text-center text-md-start">
                              <p style={{ color: '#b78846', fontSize: '1rem', fontWeight: '600' }}>{weapon.name}</p>
                              <img src={`https://gamebackend.pythonanywhere.com${weapon.img}`} width={100} alt={weapon.name} />
                            </div>
                            <div className="col-12 col-md-8 d-flex flex-column justify-content-center text-secondary text-center text-md-start">
                              <p style={{
                                background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent', fontWeight: '600'
                              }}>{weapon.description}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Add Custom Navigation Buttons */}
                    <div className="swiper-button-pre">
                      <img style={{ width: isMobile ? '30px' : '50px' }} src={prevButton} alt="Previous" />
                    </div>
                    <div className="swiper-button-nex">
                      <img style={{ width: isMobile ? '30px' : '50px' }} src={nextButton} alt="Next" />
                    </div>
                  </div>

                  {/* Ability Section */}
                  <div className="ability h-100 w-100 d-flex flex-column align-items-center justify-content-center mt-5">
                    <p style={{ color: '#b78846', fontSize: '1rem', fontWeight: '600' }}>Ability</p>
                    {
                      skills.map(skill =>(
                        <p key={skill.id} style={{
                          background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent', fontWeight: '600'
                        }}>
                           {skill.name}
                        </p>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="decorative-line mt-5">
            <div class="decoration decoration-left"></div>
            <div class="decoration decoration-right"></div>
          </div>

        </div>

        <Footer />

      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>RazorPay</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <p>Pay Now</p>
          <img width={100} src="data:image/png;base64,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" alt="" />
        </Modal.Body>
        
      </Modal>
    </div>
  );
}

export default Purchase;
