import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UserRegister() {
    return (
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
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the opacity as needed
                zIndex: 1,
            }}></div>

            <div className="d-flex justify-content-center align-items-center h-100" style={{ position: 'relative', zIndex: 2 }}>
                <div className="text-white p-4" style={{
                    width: '30rem', borderRadius: '1rem',
                    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust opacity as needed
                    backdropFilter: 'blur(10px)', // Adjust blur intensity as needed
                }}>
                    <h6 className='mb-4 text-light text-center rounded d-flex align-items-center justify-content-center'>
                        <p className='m-0 fs-3 fw-bold'>Register</p>
                        <i className="fa-brands fs-1 fa-keycdn text-secondary ms-2"></i>
                    </h6>
                    <Form>
                        <Form.Group className="mb-4" controlId="formBasicUsername">
                            <Form.Control type="text" placeholder="Enter Your Name" name="username" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Your email" name="email" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Enter Your Password" name="password" />
                        </Form.Group>
                        <div className="d-flex justify-content-start">
                            <Button variant="outline-light" size="lg">Register</Button>
                        </div>
                        <p className='mt-3'>Already have account ? <Link to={'/login'}>login</Link></p>

                    </Form>
                </div>
            </div>
        </div>
    );
}

export default UserRegister;
