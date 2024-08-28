import React, { useEffect } from 'react';
import Header from '../../common/Header';
import HomeContent from './HomeContent';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import vid from '../../../assets/intro.mp4'
function UserHome() {
    useEffect(() => {
        Aos.init({ duration: 1000 }); // Initialize AOS with a custom duration
    }, []);

    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1,
                }}
            >
                <source src={vid} type="video/mp4" />
                Your browser does not support the video 
            </video>

            {/* Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))',
                zIndex: 1,
            }}></div>

            <Header />
            <div className="container h-100" style={{ position: 'relative', zIndex: 2 }}>
                <div className='h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    {/* <h1 className='mb-3' data-aos="fade-up" style={{ fontSize: '5rem', fontFamily: 'fantasy', color: 'yellow' }}>Ancient Shadows</h1>
                    <h1 className='mb-4 fw-bold' style={{ fontSize: '4rem' }}>Now available for PS5 and Xbox Series X|S</h1>
                    <h3>Experience entertainment blockbusters, Grand Theft Auto V and GTA Online.</h3>
                    <div className='d-flex align-items-center justify-content-start gap-4 mt-4'>
                        <button className='btn btn-lg btn-outline-light rounded-0'>Watch the trailer</button>
                        <button className='btn btn-lg btn-outline-light rounded-0'>Buy Now</button>
                    </div> */}
                </div>
            </div>
            <HomeContent />
        </div>
    );
}

export default UserHome;
