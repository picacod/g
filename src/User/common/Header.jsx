import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa'; // Import the user icon
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Header() {
    return (
        <div>
            <Navbar expand="lg" className="fixed-top">
                <Container>
                    {/* Logo on the left */}
                    <Navbar.Brand href="/home">
                        <img
                            width={200}
                            src={logo}
                            alt="Logo"
                            style={{
                                filter: 'invert(1) brightness(100)', // Invert colors and set brightness to 100%
                            }}
                        />
                    </Navbar.Brand>

                    {/* Toggle for mobile view */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {/* Collapse for the middle content and right side user icon */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* Middle text links */}
                        <Nav className="mx-auto">
                            <Nav.Link href="#home" className='text-light fs-5'>Overview</Nav.Link>
                            <Link to={'/about'}><Nav.Link href="#link" className='text-light fs-5'>About</Nav.Link></Link>
                            <Nav.Link href="#link" className='text-light fs-5'>Battlepass</Nav.Link>
                            <Nav.Link href="#link" className='text-light fs-5'>Buy</Nav.Link>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title={<span style={{ color: 'white' }}>Communinty</span>}
                                menuVariant="dark"
                                className='fs-5'
                            >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        {/* User icon on the right */}
                        <Nav className="ms-auto">
                            <Nav.Link href="#profile">
                                <FaUserCircle size={30} color="white" />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header