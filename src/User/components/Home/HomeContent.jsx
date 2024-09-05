import React, { useState, useEffect } from 'react';
import bg1 from '../../../assets/bg-1.png';
import video1 from '../../../assets/test-vid.mp4';
import video2 from '../../../assets/test-vid.mp4';
import video3 from '../../../assets/intro.mp4';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Backtotop from '../../utils/Backtotop';
import '../../styles/HomeContent.css'; // Ensure this CSS file contains your animation styles
import axios from 'axios';

function HomeContent() {
    const [currentContent, setCurrentContent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [modalVideo, setModalVideo] = useState(null); // State for managing the modal and video source
    const [isLoading, setIsLoading] = useState(true);
    const [contentData, setContentData] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as per your mobile view
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    useEffect(() => {
        // Fetch content data from API
        setIsLoading(true); // Set loading to true before fetch starts
        axios.get('https://gamebackend.pythonanywhere.com/api/admin_characters/')
            .then(response => {
                setContentData(response.data);
                if (response.data.length > 0) {
                    // Set initial content index if data is available
                    setCurrentContent(0);
                }
            })
            .catch(error => {
                console.error('Error fetching content data:', error);
            })
            .finally(() => {
                setIsLoading(false); // Set loading to false after fetch completes
            });
    }, []);

    const handleButtonClick = (index) => {
        setCurrentContent(index);
    };

    const openModal = (videoSrc) => {
        setModalVideo(videoSrc); // Set the video source for the modal
    };

    const closeModal = () => {
        setModalVideo(null); // Close the modal
    };

    return (
        <div style={{ minHeight: '200vh' }}>
            {/* Background Section */}
            <div style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1))',
                    zIndex: 1,
                }}></div>

                <div className='container' style={{ position: 'relative', zIndex: 2 }}>
                    <div className='d-flex align-items-center justify-content-center no-gutters'>
                        <div className="text-light" data-aos="fade-in" data-aos-delay="100" style={{
                            padding: '10px',
                            fontSize: '1rem',
                        }}>
                            <h3 className='h1-anim text-center' style={{ color: '#a67c00', fontFamily: '"Caveat", cursive', fontSize: '3rem', ...(isMobile && { fontSize: '2rem' }), }}>The Rebirth of Legends</h3>
                            <h1 className='fw-bold'
                                style={{
                                    color: 'grey',
                                    fontSize: '2.5rem',
                                    fontFamily: '"Caveat", cursive',
                                    marginTop: '1rem',
                                    marginBottom: '0.5rem',
                                    textAlign: 'justify',
                                    lineHeight: '1.2',
                                    ...(isMobile && { fontSize: '1.5rem' }),
                                }}>It's a journey into the heart of one of the greatest stories ever told. Step into a universe
                                filled with ancient cities, dense forests, and treacherous landscapes, all meticulously
                                crafted to reflect the grandeur of the Ramayana. Experience the thrill of battle, the
                                wisdom of sages, and the power of divine weapons as you forge your path through a
                                world of myth and legend.</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1))',
                    zIndex: 1,
                }}></div>

                <div className='container' style={{ position: 'relative', zIndex: 2 }}>
                    <div className="row d-flex align-items-center no-gutters">
                        <div className="col-lg-6 col-md-12" style={{ textAlign: 'center' }}>
                            {isLoading ? (
                                <p>Loading...</p>
                            ) : contentData.length > 0 ? (
                                <img
                                    src={`https://gamebackend.pythonanywhere.com${contentData[currentContent].img}`}
                                    alt={contentData[currentContent].desc}
                                    className="img-fluid"
                                    style={{ maxHeight: '80vh', width: 'auto', objectFit: 'cover', marginBottom: '20px' }} // Ensure uniform size
                                />
                            ) : (
                                <p>No content available</p>
                            )}
                        </div>
                        <div className="col-lg-6 col-md-12 text-light" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            {isLoading ? (
                                <p>Loading...</p>
                            ) : contentData.length > 0 ? (
                                <>
                                    <h1 className='h1-anim' style={{ color: '#a67c00', fontSize: '3rem', fontFamily: '"Caveat", cursive' }}>
                                        {contentData[currentContent].name}
                                    </h1>
                                    <h3 className='mb-4' style={{ color: 'grey', fontSize: isMobile ? '1rem' : '2rem', textAlign: 'center' }}>
                                        {contentData[currentContent].desc}
                                    </h3>
                                    <button
                                        onClick={() => openModal(`https://gamebackend.pythonanywhere.com${contentData[currentContent].video}`)} // Open modal with video
                                        style={{
                                            border: 'none',
                                            background: 'none',
                                            cursor: 'pointer',
                                            padding: 0,
                                            outline: 'none',
                                        }}
                                    >
                                        <video
                                            autoPlay
                                            src={`https://gamebackend.pythonanywhere.com${contentData[currentContent].video}`}
                                            alt={contentData[currentContent].desc}
                                            style={{ width: '100%', maxWidth: isMobile? '150px' : '350px', borderRadius: '8px' }}
                                        />
                                    </button>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
                                        {contentData.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleButtonClick(i)}
                                                className={`content-button ${currentContent === i ? 'active' : ''}`}
                                                style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    borderRadius: '50%',
                                                    padding: '0',
                                                    background: `url(https://gamebackend.pythonanywhere.com${contentData[i].img}) center center / cover no-repeat`,
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    outline: 'none',
                                                    boxShadow: currentContent === i ? '0 0 0 3px rgba(255, 255, 255, 0.5)' : 'none',
                                                }}
                                            />
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <p>No content available</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {modalVideo && (
                <div className="modal-overlay" onClick={closeModal} style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                }}>
                    <div className="modal-content" style={{
                        position: 'relative',
                        backgroundColor: '#000',
                        padding: '0px',
                        borderRadius: '0px',
                        width: '80%',
                        maxWidth: '800px',
                    }}>
                        <button
                            onClick={closeModal}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                border: 'none',
                                background: 'none',
                                cursor: 'pointer',
                                fontSize: '1.5rem',
                            }}
                        >
                            &times;
                        </button>
                        <video src={modalVideo}  autoPlay style={{ width: '100%', borderRadius: '8px' }} />
                    </div>
                </div>
            )}

            <Backtotop />
        </div>
    );
}

export default HomeContent;
