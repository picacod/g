import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import logoimg from '../../assets/logo.png';
import '../styles/Header.css';

function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    const user_id = sessionStorage.getItem('user_id');

    // List the paths where you want to hide the text
    const hideTextOnPaths = ['/purchase'];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust breakpoint for mobile view
        };

        handleResize(); // Initial check

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLogout = () => {
        navigate('/')
        alert('Logout');
        sessionStorage.removeItem('user_id');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    };

    return (
        <div>
            <Navbar expand="lg" className="fixed-top container-fluid navbar-blur">
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
                        <Nav className="">

                            <div className="d-flex flex-column">
                                <Nav.Link href="/all-news" className="top-bar">NEWS & UPDATES</Nav.Link>
                                <div className="decorative-line-header m-0">
                                    <div className="decoration-header decoration-left-header"></div>
                                </div>
                            </div>
                            {!hideTextOnPaths.includes(location.pathname) && (
                                <div className="d-flex flex-column">
                                    <Nav.Link href="#character" className="top-bar">CHARACTERS</Nav.Link>
                                    <div className="decorative-line-header m-0">
                                        <div className="decoration-header decoration-left-header"></div>
                                    </div>
                                </div>
                            )}

                            <div className="d-flex flex-column">
                                <Nav.Link href="/contact-us" className="top-bar">CONTACT</Nav.Link>
                                <div className="decorative-line-header m-0">
                                    <div className="decoration-header decoration-left-header"></div>
                                </div>
                            </div>
                        </Nav>

                         <NavDropdown
            id="nav-dropdown-dark-example"
            title={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FaUser
                        style={{
                            width: isMobile ? '10%' : '100%',
                            color: '#b78846',
                            fontSize: isMobile ? '1rem' : '1.2rem',
                            transition: 'color 0.3s',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = 'white')}
                        onMouseLeave={(e) => (e.target.style.color = '#b78846')}
                    />
                </div>
            }
            menuVariant="dark"
            className={`text-light me-5 fw-semibold ${isMobile ? 'mobile-login' : 'desktop-login'}`}
            align="end"
        >
            {user_id ? (
                <>
                    <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
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
        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
}

export default Header;



