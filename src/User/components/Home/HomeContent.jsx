import React, { useEffect, useState } from 'react';
import han from '../../../assets/hanuman.png';
import rav from '../../../assets/04.png';
import ram from '../../../assets/05.png';

import bg1 from '../../../assets/bg-1.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import { useMediaQuery } from 'react-responsive';
import Backtotop from '../../utils/Backtotop';

function HomeContent() {
    // const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 500 });
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

    // Target date directly in the component
    const targetDate = new Date("2025-12-31T00:00:00");

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        const timer = setInterval(updateCountdown, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div style={{ minHeight: '400vh' }}>
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
                {/* Blended Overlay */}
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
                        {/* <div className="col-lg-6 " style={{ textAlign: 'center', padding: '10px' }}>
                            <img width={500} src={ravana} className='img-fluid' data-aos="fade-up" alt="" />
                        </div> */}
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
                            <p className='text-secondary text-end'>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Repeat the blended overlay for other content sections */}
            <div style={{
                backgroundImage: 'url("https://c.wallhere.com/photos/3d/26/1680x1050_px_action_Dark_fantasy_fi_Fighting_sci_war-1610933.jpg!d")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }}>

                {/* Existing Blended Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1))',
                    zIndex: 1,
                }}></div>

                {/* Left Side Blended Overlay */}
                <div
                    className='d-none d-xl-block '
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '60%',  // Adjust width as needed
                        height: '100%',
                        background: 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
                        zIndex: 4, // Ensure this is above the existing blended overlay
                        ...(isMobile && { display: 'none' })
                    }}></div>

                {/* Bottom Blended Overlay */}
                <div
                    className='d-none d-xl-block'
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '60%',  // Adjust height as needed
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
                        zIndex: 4, // Ensure this is above the existing blended overlay
                        ...(isMobile && { display: 'none' })
                    }}></div>

                <div className='container-fluid' style={{ position: 'relative', zIndex: 3 }}>
                    <div className='row d-flex align-items-center justify-content-center no-gutters'>
                        <div className="col-xl-6 col-lg-12 " style={{ textAlign: 'center', padding: '10px' }}>
                            <img style={{
                                width: 'auto',      // Maintain aspect ratio
                                maxHeight: '100vh', // Ensure it fits within the viewport height
                            }} src={han} className='img-fluid' data-aos="fade-up" alt="" />
                        </div>
                        <div className="col-xl-5 col-lg-12 text-light" data-aos="fade-up" data-aos-delay="300" style={{
                            textAlign: 'start',
                            padding: '10px',
                            fontSize: '1rem',
                            ...(isMobile && { textAlign: 'justify' })
                        }}>
                            <h1 className='h1-anim' style={{ lineHeight: '4rem', color: '#a67c00', fontSize: '4rem', fontFamily: '"Caveat", cursive', ...(isMobile && { fontSize: '2.3rem' }) }}>Welcome to Ramayana</h1>
                            <h3 className='mb-4 '
                                style={{
                                    fontFamily: '"Caveat", cursive',
                                    fontSize: '2rem',
                                    // paddingRight: '20rem',
                                    color: 'grey',
                                    marginBottom: '1rem',

                                    ...(isMobile && { fontSize: '1.4rem', paddingRight: '0' }),
                                }}>His wisdom and might a dark force to  pierce the heavens' light as he weaves shadows
                                in an epic strife.</h3>
                        </div>
                        <div className='col-xl-1 '></div>

                    </div>
                </div>
            </div>

            {/* Repeat the blended overlay for other content sections */}
            <div style={{
                backgroundImage: 'url("https://c.wallhere.com/photos/3d/26/1680x1050_px_action_Dark_fantasy_fi_Fighting_sci_war-1610933.jpg!d")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }}>

                {/* Existing Blended Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1))',
                    zIndex: 1,
                }}></div>

                {/* Left Side Blended Overlay */}
                <div
                    className='d-none d-xl-block'
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '60%',  // Adjust width as needed
                        height: '100%',
                        background: 'linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
                        zIndex: 4, // Ensure this is above the existing blended overlay
                        ...(isMobile && { display: 'none' })
                    }}></div>

                {/* Bottom Blended Overlay */}
                <div
                    className='d-none d-xl-block'
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '60%',  // Adjust height as needed
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
                        zIndex: 4, // Ensure this is above the existing blended overlay
                        ...(isMobile && { display: 'none' })
                    }}></div>

                <div className='container-fluid' style={{ position: 'relative', zIndex: 3 }}>
                    <div className={`row d-flex align-items-center justify-content-center  no-gutters flex-xl-row  flex-lg-column-reverse flex-md-column-reverse  ${isMobile ? 'flex-column-reverse' : ''}`}>
                    <div className='col-xl-1 '></div>
                        <div className="col-xl-5 col-lg-12 text-light " data-aos="fade-up" data-aos-delay="300" style={{
                            textAlign: 'end',
                            padding: '10px',
                            fontSize: '1rem',
                            ...(isMobile && { textAlign: 'justify', }),
                        }}>
                            <h1 className='h1-anim' style={{lineHeight: '4rem', color: '#a67c00', fontSize: '4rem', fontFamily: '"Caveat", cursive', ...(isMobile && { fontSize: '2.3rem' }) }}>Welcome to Ramayana</h1>
                            <h3 className='mb-4 '
                                style={{
                                    fontSize: '2rem',
                                    fontFamily: '"Caveat", cursive',
                                    // paddingLeft: '20rem',
                                    color: 'grey',
                                    marginBottom: '1rem',

                                    ...(isMobile && { fontSize: '1.4rem', paddingLeft: '0' }),
                                }}>His wisdom and might a dark force to  pierce the heavens' light as he weaves shadows
                                in an epic strife.</h3>
                        </div>
                        <div className="col-xl-6 col-lg-12" style={{ textAlign: 'center', padding: '10px' }}>
                            <img style={{
                                width: 'auto',      // Maintain aspect ratio
                                maxHeight: '100vh', // Ensure it fits within the viewport height
                            }} src={rav} className='img-fluid' data-aos="fade-up" alt="" />
                        </div>
                      
                    </div>
                </div>
            </div>


            {/* Repeat the blended overlay for other content sections */}
            <div style={{
                backgroundImage: 'url("https://c.wallhere.com/photos/3d/26/1680x1050_px_action_Dark_fantasy_fi_Fighting_sci_war-1610933.jpg!d")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }}>

                {/* Existing Blended Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1))',
                    zIndex: 1,
                }}></div>

                {/* Left Side Blended Overlay */}
                <div
                    className='d-none d-xl-block'
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '60%',  // Adjust width as needed
                        height: '100%',
                        background: 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
                        zIndex: 4, // Ensure this is above the existing blended overlay
                        ...(isMobile && { display: 'none' })
                    }}></div>

                {/* Bottom Blended Overlay */}
                <div
                    className='d-none d-xl-block'
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '60%',  // Adjust height as needed
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
                        zIndex: 4, // Ensure this is above the existing blended overlay
                        ...(isMobile && { display: 'none' })

                    }}></div>

                <div className='container-fluid' style={{ position: 'relative', zIndex: 3 }}>
                    <div className='row d-flex align-items-center justify-content-center no-gutters'>
                        <div className="col-xl-6 col-lg-12 " style={{ textAlign: 'center', padding: '10px' }}>
                            <img style={{
                                width: 'auto',      // Maintain aspect ratio
                                maxHeight: '100vh', // Ensure it fits within the viewport height
                                ...(isMobile && { width: '70%' })
                            }} src={ram} className='img-fluid' data-aos="fade-up" alt="" />
                        </div>
                        <div className="col-xl-5 col-lg-12 text-light" data-aos="fade-up" data-aos-delay="300" style={{
                            textAlign: 'start',
                            padding: '10px',
                            fontSize: '1rem',
                            ...(isMobile && { textAlign: 'justify' })
                        }}>
                            <h1 className='h1-anim' style={{ lineHeight: '4rem', color: '#a67c00', fontSize: '4rem', fontFamily: '"Caveat", cursive', ...(isMobile && { fontSize: '2.3rem' }) }}>Welcome to Ramayana</h1>
                            <h3 className='mb-4 '
                                style={{
                                    fontSize: '2rem',
                                    fontFamily: '"Caveat", cursive',
                                    // paddingRight: '20rem',
                                    color: 'grey',
                                    marginBottom: '1rem',
                                    ...(isMobile && { fontSize: '1.4rem', paddingRight: '0' }),
                                }}>His wisdom and might a dark force to  pierce the heavens' light as he weaves shadows
                                in an epic strife.</h3>
                        </div>
                        <div className='col-xl-1 '></div>
                    </div>
                </div>
            </div>
            <Backtotop />
        </div>
    );
}

export default HomeContent;
