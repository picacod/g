import React, { useState, useEffect } from 'react';
import bg1 from '../../../assets/bg-2.jpg'; // First fixed background
import fire from '../../../assets/fire.gif';
import frame from '../../../assets/frame.png';
import head2 from '../../../assets/head2.png';
import ico from '../../../assets/game-icon.png';

import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Footer from '../../common/Footer';
import Backtotop from '../../utils/Backtotop';

function HomeContent() {
    const [currentContent, setCurrentContent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [modalVideo, setModalVideo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [contentData, setContentData] = useState([]);

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

    const handleButtonClick = (index) => {
        setCurrentContent(index);
    };

    const openModal = (videoSrc) => {
        setModalVideo(videoSrc);
    };

    const closeModal = () => {
        setModalVideo(null);
    };

    return (
        <div style={{ height:'100vh' }}>
            {/* Fixed Background Section */}
            <div style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight:"200vh",
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
                <div className='container' style={{ position: 'relative', zIndex: 2 }}>
                    {/* conetnt */}
                    <div className='d-flex align-items-center justify-content-center no-gutters vh-100'>
                        <div className="text-light" data-aos="fade-in" data-aos-delay="100" style={{
                            padding: '10px',
                            fontSize: '1rem',
                        }}>
                            <h3 className='h1-anim text-center' style={{ color: '#a67c00', fontSize: '3rem', ...(isMobile && { fontSize: '2rem' }), }}>The Rebirth of Legends</h3>
                            <h1
                                style={{
                                    color: 'grey',
                                    fontSize: '2.5rem',
                                    marginTop: '1rem',
                                    marginBottom: '0.5rem',
                                    textAlign: 'justify',
                                    lineHeight: '1.2',
                                    ...(isMobile && { fontSize: '1.5rem' }),
                                }}>
                                It's a journey into the heart of one of the greatest stories ever told. Step into a universe
                                filled with ancient cities, dense forests, and treacherous landscapes, all meticulously
                                crafted to reflect the grandeur of the Ramayana.
                            </h1>
                        </div>
                    </div>
                    <div style={{ padding: '50px 0' }}>
                        <div className="container">
                            <div className="row d-flex align-items-center no-gutters w-100 m-0">
                                <div className="col-lg-8 col-md-12 d-flex flex-column align-items-center justify-content-center" style={{ textAlign: 'center', paddingRight: isMobile ? '0rem' : '10rem' }}>
                                    {
                                        isMobile ?
                                            <img src={head2} alt="img" style={{ width: '100%' }} data-aos="fade-in" data-aos-delay="100" />
                                            :
                                            null
                                    }

                                    {isLoading ? (
                                        <p>Loading...</p>
                                    ) : contentData.length > 0 ? (
                                        <img
                                            src={`https://gamebackend.pythonanywhere.com${contentData[currentContent].img}`}
                                            alt={contentData[currentContent].desc}
                                            className="img-fluid"
                                            data-aos="fade-up" data-aos-delay="100"
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
                                </div>
                                <div className="col-lg-4 col-md-12 text-light ">
                                    {isLoading ? (
                                        <p>Loading...</p>
                                    ) : contentData.length > 0 ? (
                                        <>
                                            {
                                                !isMobile ?
                                                    <img src={head2} alt="img" style={{ width: '100%' }} data-aos="fade-in" data-aos-delay="100" />
                                                    :
                                                    null
                                            }

                                            <h1 className='h1-anim' style={{ fontSize: isMobile ? '2rem' : '5rem', textAlign: 'start' }}>
                                                {contentData[currentContent].name}
                                            </h1>
                                            <div class="decorative-line">
                                                <div class="decoration decoration-left"></div>
                                                <div class="decoration decoration-right"></div>
                                            </div>
                                            <h3 style={{ color: 'grey', fontSize: isMobile ? '1rem' : '1.3rem', textAlign: 'start' }}>
                                                {contentData[currentContent].desc}
                                            </h3>

                                            <div className='d-flex flex-column'>
                                                <button role="button" className="golden-button mt-3 mb-3">
                                                    {/* <span className="golden-text">View more <i className="fa-solid fa-angles-right ms-3"></i></span> */}
                                                    <span className="golden-text">Unlock <i class="fa-solid fa-lock"></i></span>
                                                </button>


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

                                                </button>

                                            </div>

                                            {/* Button controls */}
                                            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
                                                {contentData.map((_, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => handleButtonClick(i)}
                                                        style={{
                                                            width: isMobile ?'60px':'90px',
                                                            height: isMobile ?'60px':'90px',
                                                            borderRadius: '50%',
                                                            background: `url(https://gamebackend.pythonanywhere.com${contentData[i].img}) center center / cover no-repeat`,
                                                            border: 'none',
                                                            cursor: 'pointer',
                                                            boxShadow: currentContent === i ? '0 0 0 3px rgba(255, 255, 255, 0.5), 0 4px 8px rgba(255, 215, 0, 0.7)' : '0 0 0 3px #b78846',
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
                            {/* frame */}
                            {/* <div class="border-frame mt-5">
                                <div className="inner-frame" style={{ height: '25rem' }}>
                                    <div className='w-100 h-100 d-flex flex-column'>
                                        <div className='h-100 w-100 row'>
                                            <div className='col-3 d-flex flex-column align-items-center justify-content-center'>
                                                <p style={{color:'#b78846'}}>Weapon</p>
                                                <img src={ico} width={100} alt="" />
                                            </div>
                                            <div className='col-9 d-flex flex-column justify-content-center text-secondary'>
                                                <p>Ashwatthama invoked Brahmashirshstra using a blade of grass as his weapon. Brahma's celestial weapon.</p>
                                            </div>
                                        </div>
                                        <div className='h-100 w-100 d-flex flex-column align-items-center justify-content-center'>
                                            <p style={{ color: '#b78846', fontSize: '1.5rem' }}>Ability</p>
                                            <p className='text-secondary'>He had the ability to build an army, cross the sea, and kill rāvaṇa. He did not wait for resources or complain about their lack. He continued manifesting his abilities, and the resources kept coming along the way.</p>
                                        </div>
                                    </div>
                                </div>

                            </div> */}
                            <div class="decorative-line mt-5">
                                <div class="decoration decoration-left"></div>
                                <div class="decoration decoration-right"></div>
                            </div>
                        </div>
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

<Backtotop/>

        </div>
    );
}

export default HomeContent;
