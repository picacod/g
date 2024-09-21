import React, { useState, useEffect } from 'react';
import darkbg from '../../assets/bg-2.jpg';

import prevButton from '../../assets/left.png'; // Your previous button image
import nextButton from '../../assets/right.png'; // Your next button image
import { useLocation } from 'react-router-dom';
import axios from 'axios';
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
  const [isPurchased, setIspurchased] = useState(false)


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
          console.log('sjhbujhb', skills);

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

  const handlePayment = async () => {
    try {
      const response = await axios.post('https://gamebackend.pythonanywhere.com/api/create_order/', {
        amount: 499 * 100 // Amount in paise
      });
      const { id, currency, amount } = response.data;
      const options = {
        key: 'rzp_test_3YXYem8NpYQGGw', // Replace with your Razorpay Key ID
        amount: amount,
        currency: currency,
        name: 'Picacod Consultancy Services Pvt. Ltd',
        description: 'Payment for purchase',
        order_id: id,
        handler: async function (response) {
          await axios.post('https://gamebackend.pythonanywhere.com/api/verify_payment/', {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature
          });
          alert('Payment Successful!');
        },
        prefill: {
          name: 'Your Name',
          email: 'your.email@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#3399cc'
        }
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Error during payment:', error);
    }
  };

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
        <div className="container" style={{ minHeight: '100vh', maxHeight: 'fit-content', paddingTop: '5rem', }}>

          <div className="row h-100" >
            <div className="col-lg-6 mt-3">
              <img className="img-fluid" loading="lazy" src={`https://gamebackend.pythonanywhere.com${characterDetails.img}`} alt="RAM" />
            </div>
            <div className="col-lg-6 position-relative">
              <div className="w-100 h-100 d-flex flex-column mt-5">
                <h1
                  className="fs-1 text-uppercase mt-3"
                  style={{
                    background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >

                  {characterDetails.name}
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
                  {
                    !isPurchased  ? <><p className="fs-1 mb-0 me-3" style={{ color: '#f0c95b' }}>
                    ₹499
                  </p>
                  <button role="button" className="golden-button">
                    <span className="golden-text" onClick={handlePayment}>Buy Now</span>
                  </button></> : <button role="button" className="golden-button mt-3 mb-3">
                    <span className="golden-text">Purchased</span>
                  </button>
                  }
                 
                  
                </div>
              </div>
            </div>
            {/* frame */}
            <div className="border-frame mt-5" >
              <div className="inner-frame" style={{ minHeight: '20rem', maxHeight: 'fit-content' }}>
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
                      skills.map(skill => (
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
            <div style={{ paddingTop: isMobile ? '1rem' : '10rem' }}>
              <div class="decorative-line mt-5" >
                <div class="decoration decoration-left"></div>
                <div class="decoration decoration-right"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Purchase;
