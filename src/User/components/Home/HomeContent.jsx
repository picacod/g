import React, { useEffect } from 'react';
import ravana from '../../../assets/ravana.png';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Footer from '../../common/Footer';

function HomeContent() {
    useEffect(() => {
        Aos.init({ duration:900 }); // Initialize AOS with a custom duration
    }, []);

    return (
        <div style={{ minHeight: '200vh', maxHeight: '200vh' }}>
            <div style={{
                backgroundImage: 'url("https://c.wallhere.com/photos/3d/26/1680x1050_px_action_Dark_fantasy_fi_Fighting_sci_war-1610933.jpg!d")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100vh', // Responsive height
                display: 'flex', // Flexbox for alignment
                alignItems: 'center', // Center vertically
                justifyContent: 'center', // Center horizontally
                position: 'relative',
            }}>
                {/* Dark Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Adjust the opacity as needed
                    zIndex: 1,
                }}></div>

                <div className='container' style={{ position: 'relative', zIndex: 2 }}>
                    <div className='row d-flex align-items-center justify-content-center no-gutters'>
                        <div className="col-lg-6" style={{
                            textAlign: 'center',
                            padding: '10px',
                        }}>
                            <img width={400} src={ravana} className='img-fluid' data-aos="fade-up" alt="" />
                        </div>
                        <div className="col-lg-6 text-light" data-aos="fade-up" data-aos-delay="400" style={{
                            textAlign: 'start',
                            padding: '10px',
                            fontSize: '1rem',
                        }}>
                            <h3>Welcome to Ramayana</h3>
                            <h1 className='mb-4 fw-bold' style={{ 
                                fontSize: '2.5rem', 
                                marginBottom: '1rem',
                                lineHeight: '1.2' 
                            }}>Ravana is a ten-headed demon king and the main antagonist in the Hindu epic Ramayana.</h1>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-4'>
                                <button className='btn btn-lg btn-outline-light rounded-0'>More About</button>
                                <button className='btn btn-lg btn-outline-light rounded-0'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* content - 2 */}
            <div style={{
                backgroundImage: 'url("https://c.wallhere.com/photos/3d/26/1680x1050_px_action_Dark_fantasy_fi_Fighting_sci_war-1610933.jpg!d")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100vh', // Responsive height
                display: 'flex', // Flexbox for alignment
                alignItems: 'center', // Center vertically
                justifyContent: 'center', // Center horizontally
                position: 'relative',
            }}>
                {/* Dark Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Adjust the opacity as needed
                    zIndex: 1,
                }}></div>

                <div className='container' style={{ position: 'relative', zIndex: 2 }}>
                    <div className='row d-flex align-items-center justify-content-center no-gutters'>
                        <div className="col-lg-6" style={{
                            textAlign: 'center',
                            padding: '10px',
                        }}>
                            <img width={800} data-aos="fade-up" src='https://png.pngtree.com/png-vector/20240428/ourmid/pngtree-lord-hanuman-realistic-image-png-image_12338980.png' className='img-fluid' alt="" />
                        </div>
                        <div className="col-lg-6 text-light" data-aos="fade-up" data-aos-delay="400" style={{
                            textAlign: 'start',
                            padding: '10px',
                            fontSize: '1rem',
                        }}>
                            <h3>Welcome to Mahabharath</h3>
                            <h1 className='mb-4 fw-bold' style={{ 
                                fontSize: '2.5rem', 
                                marginBottom: '1rem',
                                lineHeight: '1.2' 
                            }}>Hanuman had the shape of a monkey like his mother Anjana, but Vayu took the young boy to be his own son, and so Hanuman is considered to be a God.</h1>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-4'>
                                <button className='btn btn-lg btn-outline-light rounded-0'>More About</button>
                                <button className='btn btn-lg btn-outline-light rounded-0'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* content - 3 */}
            <div style={{
                backgroundImage: 'url("https://c.wallhere.com/photos/3d/26/1680x1050_px_action_Dark_fantasy_fi_Fighting_sci_war-1610933.jpg!d")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100vh', // Responsive height
                display: 'flex', // Flexbox for alignment
                alignItems: 'center', // Center vertically
                justifyContent: 'center', // Center horizontally
                position: 'relative',
            }}>
                {/* Dark Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Adjust the opacity as needed
                    zIndex: 1,
                }}></div>

                <div className='container' style={{ position: 'relative', zIndex: 2 }}>
                    <div className='row d-flex align-items-center justify-content-center no-gutters'>
                        <div className="col-lg-6" style={{
                            textAlign: 'center',
                            padding: '10px',
                        }}>
                            <img width={400} src={ravana} className='img-fluid' data-aos="fade-up" alt="" />
                        </div>
                        <div className="col-lg-6 text-light" data-aos="fade-up" data-aos-delay="400" style={{
                            textAlign: 'start',
                            padding: '10px',
                            fontSize: '1rem',
                        }}>
                            <h3>Welcome to Ramayana</h3>
                            <h1 className='mb-4 fw-bold' style={{ 
                                fontSize: '2.5rem', 
                                marginBottom: '1rem',
                                lineHeight: '1.2' 
                            }}>Ravana is a ten-headed demon king and the main antagonist in the Hindu epic Ramayana.</h1>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-4'>
                                <button className='btn btn-lg btn-outline-light rounded-0'>More About</button>
                                <button className='btn btn-lg btn-outline-light rounded-0'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default HomeContent;
