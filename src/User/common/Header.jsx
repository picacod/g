import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import logoimg from '../../assets/logo.png';
import '../styles/Header.css';

function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    const user_id = sessionStorage.getItem('user_id');

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust breakpoint for mobile view
        };

        handleResize(); // Initial check

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLogout = () => {
        alert('Logout');
        sessionStorage.removeItem('user_id');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    };

    return (
        <div>
            <Navbar expand="lg" className="fixed-top container-fluid">
                <Navbar.Brand>
                    <Link to={'/'}>
                        <img className='ms-4'
                            style={{
                                width: '10rem',
                                ...(isMobile && { width: '7rem' }),
                            }}
                            src={logoimg}
                            alt=""
                        />
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav d-flex align-items-center justify-content-center">
                    <Nav className="ms-auto">
                        <Nav className="mx-auto">
                            <div className="d-flex flex-column">
                                <Nav.Link href="/about" className="top-bar">ABOUT</Nav.Link>
                                <div className="decorative-line-header m-0">
                                    <div className="decoration-header decoration-left-header"></div>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <Nav.Link href="/allnews" className="top-bar">NEWS & UPDATES</Nav.Link>
                                <div className="decorative-line-header m-0">
                                    <div className="decoration-header decoration-left-header"></div>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <Nav.Link href="#characters" className="top-bar">CHARACTERS</Nav.Link>
                                <div className="decorative-line-header m-0">
                                    <div className="decoration-header decoration-left-header"></div>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <Nav.Link href="/about" className="top-bar">SUPPORT</Nav.Link>
                                <div className="decorative-line-header m-0">
                                    <div className="decoration-header decoration-left-header"></div>
                                </div>
                            </div>
                        </Nav>

                        {/* Mobile and desktop dropdown */}
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title={<FaUser style={{ width: isMobile ? '60%' : '100%', color: '#ffbf00', fontSize: isMobile ? '1rem' : '1.2rem' }} />}
                            menuVariant="dark"
                            className={`text-light me-5 fw-semibold ${isMobile ? 'mobile-login' : 'desktop-login'}`}
                            align="end" /* Ensures proper alignment */
                        >

                            {user_id ? (
                                <>
                                    <NavDropdown.Item href="#action/3.3" onClick={handleLogout}>Logout</NavDropdown.Item>
                                </>
                            ) : (
                                <>
                                    <Link to={'/login'} style={{ textDecoration: 'none' }}>
                                        <NavDropdown.Item href="#action/3.1">Sign In</NavDropdown.Item>
                                    </Link>
                                    <NavDropdown.Divider />
                                    <Link to={'/register'} style={{ textDecoration: 'none' }}>
                                        <NavDropdown.Item href="#action/3.2">Sign Up</NavDropdown.Item>
                                    </Link>
                                </>
                            )}
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Select a Language</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;



