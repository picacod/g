import React, { useEffect } from 'react'
import ravana from '../../../assets/ravana.png'
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


function HomeContent() {
    useEffect(() => {
        Aos.init({ duration: 1000 }); // Initialize AOS with a custom duration
    }, []);
    return (
        <div style={{ minHeight: 'fit-content', maxHeight: 'fit-content' }}>
            <div style={{
                backgroundImage: 'url("https://c.wallhere.com/photos/3d/26/1680x1050_px_action_Dark_fantasy_fi_Fighting_sci_war-1610933.jpg!d")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100vh',
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

                <div className='container h-100' style={{ position: 'relative', zIndex: 2 }}>
                    <div className='row h-100 d-flex align-items-center justify-content-center no-gutters'>
                        <div className="col-lg-6 text-light" data-aos="fade-up">
                            <h3>Welcome to Mahabharath</h3>
                            <h1 className='mb-4 fw-bold' style={{ fontSize: '3rem' }}>Ravana is a ten-headed demon king and the main antagonist in the Hindu epic Ramayana.</h1>
                            <div className='d-flex align-items-center justify-content-start gap-4 mt-4'>
                                <button className='btn btn-lg btn-outline-light rounded-0'>More About</button>
                                <button className='btn btn-lg btn-outline-light rounded-0'>Buy Now</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img width={500} src={ravana} className='img-fluid' data-aos="fade-up" alt="" />
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
                height: '100vh',
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

                <div className='container h-100' style={{ position: 'relative', zIndex: 2 }}>
                    <div className='row h-100 d-flex align-items-center justify-content-center no-gutters'>

                        <div className="col-lg-6">
                            <img width={1000}  data-aos-easing="ease-in-sine" data-aos="fade-up" src='https://png.pngtree.com/png-vector/20240201/ourmid/pngtree-lord-hanuman-3d-png-image_11672379.png' className='img-fluid' alt="" />
                        </div>
                        <div className="col-lg-6 text-light" data-aos="fade-up">
                            <h3>Welcome to Mahabharath</h3>
                            <h1 className='mb-4 fw-bold' style={{ fontSize: '3rem' }}> Hanuman had the shape of a monkey like his mother Anjana, but Vayu took the young boy to be his own son, and so Hanuman is considered to be a God.</h1>
                            <div className='d-flex align-items-center justify-content-start gap-4 mt-4'>
                                <button className='btn btn-lg btn-outline-light rounded-0'>More About</button>
                                <button className='btn btn-lg btn-outline-light rounded-0'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeContent