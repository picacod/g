import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import hanuman from '../../assets/hanuman.png';
import character2 from '../../assets/04.png';
import character3 from '../../assets/ram.jpeg';
import character4 from '../../assets/bg-1.png';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import logoimg from '../../assets/logo.png';
// import '../styles/character.css';

function Purchase() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cart, setCart] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isBuyed, setIsBuyed] = useState(false)
  const user_id = sessionStorage.getItem('user_id');


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

  const handleLogout = () => {
    alert('logout')
    sessionStorage.removeItem('user_id');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

  }


  // Example card data with image, character details, and price
  const cards = [
    {
      id: 1,
      title: 'Character 1',
      image: hanuman,
      description: 'Character 1 is a fierce warrior with unmatched skills in swordsmanship.',
      price: '$10'
    },
    {
      id: 2,
      title: 'Character 2',
      image: character2,
      description: 'Character 2 is a cunning mage, mastering elemental magic.',
      price: '$15'
    },
    {
      id: 3,
      title: 'Character 3',
      image: character3,
      description: 'Character 3 is a swift archer, known for precise and deadly shots.',
      price: '$20'
    },
    {
      id: 4,
      title: 'Character 4',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqkm6ZFJ0hUH4CN3TQOzLuvb3aU-je4qqZrQ&s',
      description: 'Character 4 is a skilled assassin with unmatched stealth.',
      price: '$25'
    },
    {
      id: 5,
      title: 'Character 5',
      image: 'https://assetsio.gnwcdn.com/god-of-war-ragnarok_UcMPcSt.jpeg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp',
      description: 'Character 5 is a powerful sorceress with arcane knowledge.',
      price: '$30'
    },
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleAddToCart = () => {
    if (selectedCard && !cart.includes(selectedCard)) {
      setCart([...cart, selectedCard]);
      alert(`${selectedCard.title} has been added to your cart!`);
    }
  };


  return (

    <div style={{ backgroundImage: `url(${character4})`, minHeight: '100vh', maxHeight: 'fit-content' }} className='vh-100  d-flex align-items-center justify-content-center'>
      <div>
        <Navbar expand="lg" className="fixed-top container d-flex align-items-center justify-content-between">
          {/* Logo on the left */}
          <Link to={'/home'}>
            <img
              style={{
                width: '10rem',
                filter: 'invert(1) brightness(100)',
                ...(isMobile && { width: '7rem' }),
              }}
              src={logoimg}
              alt=""
              srcSet=""
            />
          </Link>

          <button>
            {user_id ? (
              <>
                <button className='btn' onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>

                <Link to={'/register'} style={{ textDecoration: 'none' }}>
                  <button className='btn'>Sign Up</button>
                </Link>
              </>
            )}
          </button>
        </Navbar>

      </div>



      <div className='container ' style={{ height: '80vh', overflowY: isMobile ? 'hidden' : 'hidden' }}>
        <div className='row h-100'>
          {/* Left Side: Swiper Image List with Navigation */}
          <div className={`col-12 col-md-5 d-flex flex-column position-relative ${isMobile ? 'swiper-horizontal h-25' : 'h-100'}`} style={{ height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className='swiper-container' style={{ height: '100%', position: 'relative' }}>
              <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={isMobile ? 1 : 3}
                direction={isMobile ? 'horizontal' : 'vertical'}

                navigation={{
                  prevEl: '.swiper-button-prev',
                  nextEl: '.swiper-button-next',
                }}
                style={{ height: '100%' }}
                onInit={(swiper) => {
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
              >
                {cards.map((card) => (
                  <SwiperSlide key={card.id} style={{ height: isMobile ? '500px' : '400px' }}>
                    <div
                      className='position-relative d-flex align-items-center justify-content-center'
                      style={{ cursor: 'pointer', height: '100%' }}
                      onClick={() => handleCardClick(card)}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        style={{ width: '50%', height: '100%', objectFit: 'fit' }}
                      />
                      <div
                        className='position-absolute bottom-0 start-0 p-2 text-white w-100'
                        style={{
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          textAlign: 'center',
                        }}
                      >
                        <h5 style={{ color: 'grey' }} className='m-0'>{card.title}</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Swiper Navigation Buttons */}
              <div className='swiper-button-prev position-absolute top-50 start-0 translate-middle-x ' style={{ transform: 'translateY(10px)', width: '10px', height: '10px', backgroundSize: '10px', color: 'grey' }}></div>
              <div className='swiper-button-next position-absolute bottom-0 start-100 translate-middle-x' style={{ transform: 'translateY(-10px)', width: '10px', height: '10px', backgroundSize: '10px', color: 'grey' }}></div>
            </div>
          </div>

          {/* Middle Side: Display Selected Card Details */}
          <div className={`col-12 col-md-7  d-flex align-items-center justify-content-center ${isMobile ? ' h-75' : 'h-100'}`}>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', }} className='card d-flex flex-column align-items-center h-100 w-100 p-4 text-center'>
              {selectedCard ? (
                <>
                  <h4 style={{ color: 'grey' }} className='mb-3 mt-5 '>{selectedCard.title}</h4>
                  <img
                    src={selectedCard.image}
                    style={{ width: '70%', marginBottom: '10px', height: isMobile ? '30%' : '50%' }}
                    alt={selectedCard.title}
                  />
                  <p style={{ color: 'grey' }}>{selectedCard.description}</p>
                  <h5 className='text-light mb-4'>Price: {selectedCard.price}</h5>
                  <div className='d-flex'>
                    {
                      isBuyed ? <>
                        <button className='btn border btn-outline-secondary text-light  me-3 w-40' onClick={handleAddToCart}>
                          Buy Now
                        </button>
                        <button className='btn border btn-outline-secondary text-light w-40' onClick={handleAddToCart}>
                          Add to Cart
                        </button>
                      </> : <button>Purchased</button>
                    }
                  </div>
                </>
              ) : (
                <p style={{ color: 'grey' }}>Select a character to see the details</p>
              )}
            </div>
          </div>

          {/* Right Side: Display Price and Buttons */}
          {/* <div className='col-3 d-flex align-items-center justify-content-center'>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className='card  d-flex flex-column align-items-center justify-content-center h-100 w-100 p-4'>
              {selectedCard ? (
                <>
                  <h4 className='text-light mb-4'>Price: {selectedCard.price}</h4>
                  <button className='btn border btn-outline-secondary text-light  mb-2 w-100' onClick={handleAddToCart}>
                    Add to Cart
                  </button>
                  <button className='btn border btn-outline-secondary text-light w-100' onClick={handleAddToWishlist}>
                    Add to Wishlist
                  </button>
                </>
              ) : (
                <p>Select a character to see the price and options</p>
              )}
            </div>
          </div> */}
          
        </div>
      </div>
    </div>
  );
}

export default Purchase;