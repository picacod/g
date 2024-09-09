import React, { useState, useEffect } from 'react';
import darkbg from '../../assets/bg-2.jpg';
import ram from '../../assets/ram.png';
import ico from '../../assets/game-icon.png';
import prevButton from '../../assets/left.png'; // Your previous button image
import nextButton from '../../assets/right.png'; // Your next button image

// Import Swiper React components/styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Purchase() {
  const [isReadMore, setIsReadMore] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const weaponsData = [
    {
      name: 'Brahmashirsha Astra',
      icon: 'https://example.com/path-to-icon1.png',
      description: 'A powerful celestial weapon used by Ashwatthama.'
    },
    // Other weapons data...
  ];

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fullText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit 
    consequatur mollitia dignissimos corporis quo sed magnam aperiam reiciendis. Lorem ipsum 
    dolor sit amet, consectetur adipisicing elit. Fugit consequatur mollitia dignissimos corporis 
    quo sed magnam aperiam reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit 
    consequatur mollitia dignissimos corporis quo sed magnam aperiam reiciendis. Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. Fugit consequatur mollitia dignissimos corporis quo sed magnam aperiam reiciendis.`;

  const truncatedText = `${fullText.substring(0, 150)}...`;

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="vh-100 d-flex align-items-center justify-content-center"
    >
      {/* Blurred Background Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${darkbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(5px)',
          zIndex: 1,
        }}
      ></div>

      {/* Content on Top */}
      <div
        className="container h-100 d-flex align-items-center justify-content-center flex-column"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <div className="row h-75 w-100">
          <div className="col-lg-6 mt-3">
            <img className="img-fluid" src={ram} alt="RAM" />
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
                Buy Now
              </h1>
              <div className="decorative-line mt-1">
                <div className="decoration decoration-left"></div>
                <div className="decoration decoration-right"></div>
              </div>
              <p className="fs-5" style={{ color: '#b78846' }}>
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
                <p className="fs-1 mb-0 me-3" style={{ color: '#b78846' }}>
                  ₹678
                </p>
                <button role="button" className="golden-button">
                  <span className="golden-text">Purchase</span>
                </button>
              </div>
            </div>
          </div>
          {/* Frame */}
          <div className="border-frame mt-5">
            <div className="inner-frame" style={{ height: '25rem' }}>
              <div className="w-100 h-100 d-flex flex-column">
                {/* Swiper Slider for Weapons */}
                <div className="weapon w-100 h-100">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                      prevEl: '.custom-swiper-button-prev',
                      nextEl: '.custom-swiper-button-next'
                    }} // Custom navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="swiper-container"
                  >
                    {weaponsData.map((weapon, index) => (
                      <SwiperSlide key={index}>
                        <div className="col-3 d-flex flex-column align-items-center justify-content-center">
                          <p style={{ color: '#b78846' }}>{weapon.name}</p>
                          <img src={ico} width={100} alt={weapon.name} />
                        </div>
                        <div className="col-9 d-flex flex-column justify-content-center text-secondary">
                          <p>{weapon.description}</p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  {/* Custom Navigation Buttons */}
                  <div className="custom-swiper-button custom-swiper-button-prev"></div>
                  <div className="custom-swiper-button custom-swiper-button-next"></div>
                </div>

                {/* Ability Section */}
                <div className="ability h-100 w-100 d-flex flex-column align-items-center justify-content-center">
                  <p style={{ color: '#b78846', fontSize: '1.5rem' }}>Ability</p>
                  <p className="text-secondary">
                    He had the ability to build an army, cross the sea, and kill Rāvaṇa. He did not wait for resources or complain about their lack. He continued manifesting his abilities, and the resources kept coming along the way.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Purchase;
