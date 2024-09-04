import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import paper from '../../assets/paper.png';
import darkbg from '../../assets/dark-bg.jpg';
import character3 from '../../assets/ram.jpeg';
import character4 from '../../assets/bg-1.png';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import logoimg from '../../assets/logo.png';
import axios from 'axios';
import Preloader from '../../Preloader';
// import '../styles/character.css';

function Purchase() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cart, setCart] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isBuyed, setIsBuyed] = useState(true)
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const user_id = sessionStorage.getItem('user_id');
  const navigate = useNavigate()


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


  useEffect(() => {
    // Fetch character data from API
    setIsLoading(true); // Set loading to true before fetch starts
    axios.get('https://gamebackend.pythonanywhere.com/api/admin_characters/')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      })
      .finally(() => {
        setIsLoading(false); // Set loading to false after fetch completes
      });
  }, []);


  const handleLogout = () => {
    alert('logout')
    sessionStorage.removeItem('user_id');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/')
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handlePayment = async () => {
    if (!user_id) {
      alert('login to payment')
      return;
    }
    try {
      const response = await axios.post('https://gamebackend.pythonanywhere.com/api/create_order/', {
        amount: selectedCard.price * 100 // Amount in paise
      });

      const { id, currency, amount } = response.data;

      const options = {
        key: 'rzp_test_3YXYem8NpYQGGw', // Replace with your Razorpay Key ID
        amount: amount,
        currency: currency,
        name: 'Your Company Name',
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

    <>
      {
        isLoading ? <Preloader /> :
          <div style={{
            backgroundImage: `url(${darkbg})`, minHeight: '100vh', maxHeight: 'fit-content', backgroundSize: 'cover', // Adjusts the background to cover the entire div
            backgroundPosition: 'center', // Centers the background image
            backgroundRepeat: 'no-repeat'
          }} className='vh-100  d-flex align-items-center justify-content-center'>
            <div>
              <Navbar expand="lg" className="fixed-top container-fluid d-flex align-items-center justify-content-between">
                {/* Logo on the left */}
                <Link to={'/'}>
                  <img
                    style={{
                      width: '10rem',
                      // filter: 'invert(1) brightness(100)',
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
                      <button className='btn button-with-bg' onClick={handleLogout}>Logout</button>
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

            <div className='container' style={{ height: '80vh', overflowY: 'hidden' }}>
              <div className={`row h-100 ${isMobile ? 'flex-column-reverse' : ''}`}>
                {/* Left Side: Swiper Image List with Navigation */}
                <div
                  className={`col-12 col-md-3 d-flex flex-column position-relative ${isMobile ? 'swiper-horizontal h-25' : 'h-100'}`}
                  style={{
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Background color only, no image
                  }}
                >
                  <div className='swiper-container' style={{ height: '100%', position: 'relative' }}>
                    <Swiper
                      modules={[Navigation]}
                      spaceBetween={isMobile ? 1 : 10}
                      slidesPerView={isMobile ? 3 : 3}
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
                      {characters.map((card) => (
                        <SwiperSlide key={card.id} style={{ height: isMobile ? '200px' : '400px', marginBottom: isMobile && '2rem' }}>
                          <div
                            className='position-relative d-flex align-items-center justify-content-center'
                            style={{ cursor: 'pointer', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            onClick={() => handleCardClick(card)}
                          >
                            <img
                              src={`https://gamebackend.pythonanywhere.com/${card.img}`}
                              alt={card.name}
                              style={{
                                width: isMobile ? '80px' : '150px', // Adjusted width
                                height: isMobile ? '80px' : '150px', // Adjusted height
                                objectFit: 'cover', // Ensures the image covers the container
                                borderRadius: '50%', // Makes the image circular
                                border: '2px solid grey', // Optional: Adds a border around the circle
                              }}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    {/* Swiper Navigation Buttons */}
                    <div className='swiper-button-prev position-absolute top-50 start-30 translate-middle-x' style={{ transform: 'translateY(10px)', color: 'grey' }}></div>
                    <div className='swiper-button-next position-absolute top-50 end-0 translate-middle-x' style={{ transform: 'translateY(-10px)', color: 'grey' }}></div>
                  </div>
                </div>

                {/* Middle Side: Display Selected Card Details */}
                <div className={`col-12 col-md-9 d-flex align-items-center justify-content-center ${isMobile ? 'h-75' : 'h-100'}`}>
                  <div
                    style={{
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      backgroundImage: `url()`, // Replace with your external image URL
                      backgroundSize: 'cover', // Adjusts the background to cover the entire div
                      backgroundPosition: 'center', // Centers the background image
                      backgroundRepeat: 'no-repeat', // Ensures the image doesn’t repeat
                      border:'none'
                    }}
                    className='card d-flex flex-column align-items-center h-100 w-100 p-4 text-center border-none'
                  >
                    {selectedCard ? (
                      <>
                        <h1 className='h1-anim text-center text-uppercase w-100' style={{ color: '#a67c00', fontFamily: '"Caveat", cursive', fontSize: '5rem', ...(isMobile && { fontSize: '2rem' }), }}>{selectedCard.name}</h1>
                        <img
                          src={`https://gamebackend.pythonanywhere.com/${selectedCard.img}`}
                          style={{ width: '70%', marginBottom: '10px', height: isMobile ? '20rem' : '30rem' }}
                          alt={selectedCard.name}
                          className='img-fluid'
                        />
                        <p style={{ color: 'brown' }}>{selectedCard.desc}</p>
                        <h5 className='text-light mb-4'>Price: {selectedCard.price}</h5>
                        <div className='d-flex'>
                          {
                            isBuyed ? (
                              <button onClick={handlePayment} className='btn me-3 w-40 button-with-bg'>
                                Buy Now
                              </button>
                            ) : (
                              <button className='btn button-with-bg'>Purchased</button>
                            )
                          }
                        </div>
                      </>
                    ) : (
                      <p style={{ color: 'white' }}>Select a character to see the details</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
      }
    </>
  );
}

export default Purchase;