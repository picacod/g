import React from 'react';
import '../styles/Purchase.css';
import hanuman from '../../assets/hanuman.png';
import ram from '../../assets/04.png';
import img from '../../assets/ram.jpeg';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Overview() {
    return (
        <>
            <div className="banner" style={{
            position: 'relative',
            backgroundImage: 'url("https://wallpapercave.com/wp/wp10596166.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            minHeight: '100vh',
            maxHeight: 'fit-content'
            // overflow: 'hidden' // Ensure the overlay does not cause overflow issues
        }}>
                <div className="slider" style={{ '--quantity': 6 }}>
                    <div className="item" style={{ '--position': 1, backgroundColor: '#171717' }}>
                        <a href="https://www.google.com">
                            <img src={hanuman} alt="" />
                        </a>
                    </div>
                    <div className="item" style={{ '--position': 2, backgroundColor: '#171717' }}>
                        <a href="https://www.google.com">
                            <img src={ram} alt="" />
                        </a>
                    </div>
                    <div className="item" style={{ '--position': 3, backgroundColor: '#171717' }}>
                        <img src={img} alt="" />
                    </div>
                    <div className="item" style={{ '--position': 4, backgroundColor: '#171717' }}>
                        <a href="https://www.google.com">
                            <img src={hanuman} alt="" />
                        </a>
                    </div>
                    <div className="item" style={{ '--position': 5, backgroundColor: '#171717' }}>
                        <a href="https://www.google.com">
                            <img src={ram} alt="" />
                        </a>
                    </div>
                    <div className="item" style={{ '--position': 6, backgroundColor: '#171717' }}>
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="content">
                    <p>Date of birth</p>
                    <input type="date" placeholder="Date of Birth" />
                    <Link to={'/purchase'}>
                        <button className='btn btn-outline-warning'>Submit</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Overview;
