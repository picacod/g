import React, { useEffect, useState } from 'react';
import ravana from '../../../assets/ravana.png';
import rambg from '../../../assets/ram.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import { useMediaQuery } from 'react-responsive';
import Backtotop from '../../utils/Backtotop';

function HomeContent() {
    // const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 900 });
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
                backgroundImage: `url(${rambg})`,
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
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1))',
                    zIndex: 1,
                }}></div>

                <div className='container' style={{ position: 'relative', zIndex: 2 }}>
                    <div className='d-flex align-items-center justify-content-center no-gutters'>
                        {/* <div className="col-lg-6 " style={{ textAlign: 'center', padding: '10px' }}>
                            <img width={500} src={ravana} className='img-fluid' data-aos="fade-up" alt="" />
                        </div> */}
                        <div className="text-light" data-aos="fade-in" data-aos-delay="500" style={{
                            textAlign: 'start',
                            padding: '10px',
                            fontSize: '1rem',
                        }}>
                            <h3 className='h1-anim' style={{ color: '#a67c00', fontSize: '3rem' }}>The Rebirth of Legends</h3>
                            <h1 className='mb-4 fw-bold c-anim'
                                style={{
                                    fontSize: '3rem',
                                    marginBottom: '0.1rem',
                                    lineHeight: '1.2',
                                    ...(isMobile && { fontSize: '1.5rem' }),
                                }}>It's a journey into the heart of one of the greatest stories ever told. Step into a universe
                                filled with ancient cities, dense forests, and treacherous landscapes, all meticulously
                                crafted to reflect the grandeur of the Ramayana. Experience the thrill of battle, the
                                wisdom of sages, and the power of divine weapons as you forge your path through a
                                world of myth and legend.</h1>
                            <p className='text-secondary'>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</p>
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
                {/* Blended Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1))',
                    zIndex: 1,
                }}></div>

                <div className='container' style={{ position: 'relative', zIndex: 2 }}>
                    <div className='row d-flex align-items-center justify-content-center no-gutters'>
                        <div className="col-lg-6 " style={{ textAlign: 'center', padding: '10px' }}>
                            <img width={500} src={ravana} className='img-fluid' data-aos="fade-up" alt="" />
                        </div>
                        <div className="col-lg-6 text-light" data-aos="fade-up" data-aos-delay="400" style={{
                            textAlign: 'start',
                            padding: '10px',
                            fontSize: '1rem',
                        }}>
                            <h1 className='h1-anim' style={{ color: '#a67c00',     fontSize: '4rem' }}>Welcome to Ramayana</h1>
                            <h3 className='mb-4 '
                                style={{
                                    fontSize: '1.9rem',
                                    marginBottom: '1rem',
                                    lineHeight: '1.2',letterSpacing:'2px',
                                    ...(isMobile && { fontSize: '1.5rem' }),
                                }}>His wisdom and might a dark force to pierce the heavens' light as he weaves shadows
                                in an epic strife.</h3>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-4'>
                                <button className='btn btn-lg btn-outline-light rounded-0'>More About</button>
                                {/* <button className='btn btn-lg btn-outline-light rounded-0'>Buy Now</button> */}
                            </div>
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
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1))',
                    zIndex: 1,
                }}></div>

                <div className='container' style={{ position: 'relative', zIndex: 2 }}>
                    <div className={`row d-flex align-items-center justify-content-center no-gutters ${isMobile ? 'flex-column-reverse' : ''}`}>
                        <div className="col-lg-6 text-light" data-aos="fade-up" data-aos-delay="400" style={{
                            textAlign: 'start',
                            padding: '10px',
                            fontSize: '1rem',
                        }}>
                            <h3 className='' style={{ }}>Welcome to Mahabharath</h3>
                            <h1 className='mb-4 fw-bold h2-anim'
                                style={{
                                    fontSize: '2.5rem',
                                    marginBottom: '1rem',
                                    lineHeight: '1.2',
                                    ...(isMobile && { fontSize: '1.5rem' }),
                                }}>Hanuman had the shape of a monkey like his mother Anjana, but Vayu took the young boy to be his own son, and so Hanuman is considered to be a God.</h1>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-4'>
                                <button className='btn btn-lg btn-outline-light rounded-0'>More About</button>
                            </div>
                        </div>
                        <div className="col-lg-6" style={{ textAlign: 'center', padding: '10px' }}>
                            <img style={{ width: '100rem' }} data-aos="fade-up" src='https://png.pngtree.com/png-vector/20240428/ourmid/pngtree-lord-hanuman-realistic-image-png-image_12338980.png' className='img-fluid' alt="Hanuman" />
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
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1))',
                    zIndex: 1,
                }}></div>

                <div className='container' style={{ position: 'relative', zIndex: 2 }}>
                    <div className='row d-flex align-items-center justify-content-center no-gutters'>
                        <div className="col-lg-6" style={{ textAlign: 'center', padding: '10px' }}>
                            <img style={{ width: '100rem' }} data-aos="fade-up" src='https://png.pngtree.com/png-vector/20240428/ourmid/pngtree-lord-hanuman-realistic-image-png-image_12338980.png' className='img-fluid' alt="" />
                        </div>
                        <div className="col-lg-6 text-light" data-aos="fade-up" data-aos-delay="400" style={{
                            textAlign: 'start',
                            padding: '10px',
                            fontSize: '1rem',
                        }}>
                            <h3 className='h1-anim' style={{ color: '#a67c00' }}>Welcome to Mahabharath</h3>
                            <h1 className='mb-4 fw-bold'
                                style={{
                                    fontSize: '2.5rem',
                                    marginBottom: '1rem',
                                    lineHeight: '1.2'
                                    ,
                                    ...(isMobile && { fontSize: '1.5rem' }),
                                }}>Hanuman had the shape of a monkey like his mother Anjana, but Vayu took the young boy to be his own son, and so Hanuman is considered to be a God.</h1>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-4'>
                                <button className='btn btn-lg btn-outline-light rounded-0'>More About</button>
                                {/* <button className='btn btn-lg btn-outline-light rounded-0'>Buy Now</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Backtotop />
        </div>
    );
}

export default HomeContent;
