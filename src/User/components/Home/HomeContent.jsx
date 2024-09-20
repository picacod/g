import React, { useState, useEffect } from 'react';
import bg1 from '../../../assets/bg-2.jpg'; // First fixed background
import head2 from '../../../assets/tf-final.png';
// import ico from '../../../assets/game-icon.png';

import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Footer from '../../common/Footer';
import Backtotop from '../../utils/Backtotop';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function HomeContent() {
    const user_id = sessionStorage.getItem('user_id');
    const [currentContent, setCurrentContent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [modalVideo, setModalVideo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [contentData, setContentData] = useState([]);
    const [weaponsData, setWeaponsData] = useState([]);
    const [selectedCharacterId, setSelectedCharacterId] = useState(null);
    const [hoverIndex, setHoverIndex] = useState(null);
    const navigate = useNavigate();
    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };

    const zoomStyle = {
        width: isMobile ? '60px' : '90px',
        height: isMobile ? '60px' : '90px',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 0 0 3px rgba(255, 255, 255, 0.5), 0 4px 8px rgba(255, 215, 0, 0.7)',
        transition: 'transform 0.3s ease',
    };

    const zoomedStyle = {
        ...zoomStyle,
        transform: 'scale(1.1)', // Slight zoom effect
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://gamebackend.pythonanywhere.com/api/admin_characters/')
            .then(response => {

                setContentData(response.data);
                if (response.data.length > 0) {
                    setCurrentContent(0);
                }
            })
            .catch(error => {
                console.error('Error fetching content data:', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        if (selectedCharacterId !== null) {
            setIsLoading(true);
            axios.get(`https://gamebackend.pythonanywhere.com/api/weapons/?character_id=${selectedCharacterId}`)
                .then(response => {
                    console.log('weapons:', response.data);

                    setWeaponsData(response.data);
                })
                .catch(error => {
                    console.error('Error fetching weapons data:', error);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [selectedCharacterId]);

    useEffect(() => {
        // Trigger the button click for the first content on initial load
        if (contentData.length > 0) {
            handleButtonClick(0); // Simulate click on the first character (index 0)
        }
    }, [contentData]);  // Only run when contentData is updated

    const handleButtonClick = (index) => {
        setCurrentContent(index);
        setSelectedCharacterId(contentData[index].id);
    };
    const openModal = (videoSrc) => {
        setModalVideo(videoSrc);
    };

    const closeModal = () => {
        setModalVideo(null);
    };
    const handleUnlockClick = () => {
        if (!user_id) {
            navigate('login')
            return
        }

        if (selectedCharacterId !== null) {
            console.log(('id:', selectedCharacterId));

            const selectedCharacter = contentData.find(c => c.id === selectedCharacterId);
            navigate(`/purchase`, {
                state: {
                    characterId: selectedCharacterId,
                    characterDetails: selectedCharacter,
                }

            });
        } else {
            console.error('No character selected');
        }
    };
    return (
        <div style={{ height: '100vh' }}>
            {/* Fixed Background Section */}
            <div style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: "200vh",
                backgroundAttachment: 'fixed',
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
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
                    backdropFilter: 'blur(5px)', // Apply blur effect
                    zIndex: 1,
                }}></div>
                <div className='container mb-3' style={{ position: 'relative', zIndex: 2 }}>
                    {/* conetnt */}
                    <div className='d-flex align-items-center justify-content-center no-gutters' style={{ height: isMobile ? '80vh' : '100vh' }}>
                        <div className="text-light" data-aos="fade-in" data-aos-delay="100" style={{
                            padding: '10px',
                            fontSize: '1rem',
                        }}>
                            <h3 className='h2-anim text-center' style={{ color: '#a67c00', fontSize: '3rem', ...(isMobile && { fontSize: '2rem' }), }}>The Rebirth of Legends</h3>
                            <p
                                style={{
                                    background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontSize: '2rem',
                                    marginTop: '1rem',
                                    marginBottom: '0.5rem',
                                    textAlign: isMobile ? 'justify' : 'center',
                                    ...(isMobile && { fontSize: '1.2rem' }),
                                }}>
                                Embark on a riveting journey into the world of Ramayana, one of the greatest stories ever told. Navigate through ancient cities, treacherous landscapes, and dense forests that are meticulously crafted to make you swoon at the grasp of its grandeur. Don the roles of epic characters and take on new adventures of cosmic magnitude to define their destiny through your choices.
                            </p>
                        </div>
                    </div>
                    <div style={{ padding: '0px 0' }}>
                        <div className="container vh-100 d-flex align-items-center justify-content center" id='character'>
                            <div className="row d-flex align-items-center no-gutters w-100 m-0">
                                <div className="col-lg-8 col-md-12 d-flex flex-column align-items-center justify-content-center" style={{ textAlign: 'center', paddingRight: isMobile ? '0rem' : '10rem' }}>
                                    {
                                        isMobile ?
                                            <img src={head2} alt="img" style={{ width: '100%' }} className='mb-5' data-aos="fade-in" data-aos-delay="100" />
                                            :
                                            null
                                    }

                                    {isLoading ? (
                                        <div style={{
                                            border: "2px solid #f3f3f3", /* Light grey */
                                            borderTop: "2px solid #b78846", /* Blue */
                                            borderRadius: "50%",
                                            width: "50%",
                                            height: "50%",
                                            animation: "spin 2s linear infinite"
                                        }}>
                                        </div>
                                    ) : contentData.length > 0 ? (
                                        <img loading="lazy"
                                            src={`https://gamebackend.pythonanywhere.com${contentData[currentContent].img}`}
                                            alt={contentData[currentContent].desc}
                                            className="img-fluid"
                                            data-aos="fade-in" data-aos-delay="100"
                                            style={{
                                                maxHeight: isMobile ? '30vh' : '100%',
                                                maxWidth: '100%',
                                                objectFit: 'cover',
                                                marginBottom: '20px',
                                                overflow: 'hidden',
                                            }}
                                        />
                                    ) : (
                                        <p>No content available</p>
                                    )}

                                    <style>
                                        {`
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        `}
                                    </style>
                                </div>

                                <div className="col-lg-4 col-md-12 text-light ">
                                    {isLoading ? (
                                        <p>Loading...</p>
                                    ) : contentData.length > 0 ? (
                                        <>
                                            {
                                                !isMobile ?
                                                    <img src={head2} alt="img" style={{ width: '100%' }} className='mb-5' data-aos="fade-in" data-aos-delay="100" />
                                                    :
                                                    null
                                            }

                                            <h1 className='h2-anim' style={{ fontSize: isMobile ? '2rem' : '5rem', textAlign: 'start' }}>
                                                {contentData[currentContent].name}
                                            </h1>
                                            <div className="decorative-line">
                                                <div className="decoration decoration-left"></div>
                                                <div className="decoration decoration-right"></div>
                                            </div>
                                            <h3 style={{
                                                background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent', fontSize: isMobile ? '1rem' : '1.3rem', textAlign: 'start'
                                            }}>
                                                {contentData[currentContent].desc}
                                            </h3>

                                            <div className='d-flex flex-column'>
                                                <button role="button" className="golden-button mt-3 mb-3" onClick={handleUnlockClick}>
                                                    {/* <span className="golden-text">View more <i className="fa-solid fa-angles-right ms-3"></i></span> */}
                                                    <span className="golden-text">Unlock <i class="fa-solid fa-lock"></i></span>
                                                </button>

                                                {/* 
                                                <button
                                                    onClick={() => openModal(`https://gamebackend.pythonanywhere.com${contentData[currentContent].video}`)}
                                                    style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}
                                                >
                                                    <video
                                                        loop
                                                        autoPlay
                                                        src={`https://gamebackend.pythonanywhere.com${contentData[currentContent].video}`}
                                                        alt={contentData[currentContent].desc}
                                                        style={{ width: '100%', borderRadius: '0px' }}
                                                    />

                                                </button> */}

                                            </div>

                                            {/* Button controls */}
                                            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
                                                {contentData.map((_, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => handleButtonClick(i)}
                                                        onMouseEnter={() => handleMouseEnter(i)}
                                                        onMouseLeave={handleMouseLeave}
                                                        style={{
                                                            width: isMobile ? '60px' : '90px',
                                                            height: isMobile ? '60px' : '90px',
                                                            borderRadius: '50%',
                                                            background: `url(https://gamebackend.pythonanywhere.com${contentData[i].img}) center center / cover no-repeat`,
                                                            ... (hoverIndex === i ? zoomedStyle : zoomStyle),
                                                            border: 'none',
                                                            cursor: 'pointer',
                                                            boxShadow: currentContent === i ? '0 0 0 3px rgba(255, 255, 255, 0.5), 2px 4px 8px rgba(255, 215, 0, 0.7)' : '0 0 0 3px #b78846',
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
                    <div class="decorative-line mt-5">
                        <div class="decoration decoration-left"></div>
                        <div class="decoration decoration-right"></div>
                    </div>
                    <Footer />
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
                        <video src={modalVideo} autoPlay style={{ width: '100%', borderRadius: '8px' }} />
                    </div>
                </div>
            )}

            <Backtotop />

        </div>
    );
}

export default HomeContent;
