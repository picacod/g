

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, FloatingLabel } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import '../styles/Authentication.css'
function Authentication({ insideRegister }) {
    const [userInputs, setUserInputs] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(userInputs);
    };

    return (
        <div style={{ height: '100vh', position: 'relative', backgroundColor: 'black' ,  msOverflowY: 'hidden', overflowX: 'hidden' }} className='d-flex flex-wrap'>
            {/* Main Content Column */}
            <div className='col-lg-8 col-md-12 d-flex flex-column justify-content-center' style={{ position: 'relative', backgroundImage: 'url("https://c.wallhere.com/photos/3d/26/1680x1050_px_action_Dark_fantasy_fi_Fighting_sci_war-1610933.jpg!d")', height: '100vh' }}>
                <div className='' style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1))',
                    zIndex: 1,
                }}></div>
                <div className='text-center d-lg-none'>
                    {/* <p className='text-light' style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        marginTop: '80px',

                        // Responsive text size for small screens
                        '@media (min-width: 576px)': {
                            fontSize: '20px' // Adjust as needed for medium screens
                        }
                    }}>
                        THE GAMES HAVE A WHOLE <br /> NEW ENERGY!
                    </p> */}
                    <img src={logo} alt="" style={{ width:'10rem' }} />
                </div>

                {/* Overlapping Box for Small Screens */}
                <div className='d-lg-none d-flex justify-content-center align-items-center' style={{ height: '100vh', width: '100vw', backgroundColor: 'black' }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '40px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '80%', zIndex: '100',
                       width: '80%',
            maxWidth: '400px'

                    }} className='card-shadow rounded-0 mb-5'>
                        <Link className='text-secondary' style={{ textDecoration: 'none' }} to={'/home'}> <ArrowBackIosIcon style={{fontSize:'1rem'}} /></Link>
                        <h6 style={{ color: 'grey' }} className='text-center'>
                            {insideRegister ? 'New user' : 'Sign in'}
                        </h6>

                        <h5 style={{ color: 'black' }} className='fw-bolder text-center'>
                            {insideRegister ? 'Register' : 'Login to your account'}
                        </h5>

                        <Form onSubmit={handleSubmit}>
                            {insideRegister &&
                                <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                                    <Form.Control
                                        value={userInputs.username}
                                        onChange={e => setUserInputs({ ...userInputs, username: e.target.value })}
                                        type="text"
                                        placeholder="Username"
                                    />
                                </FloatingLabel>
                            }
                            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                <Form.Control
                                    value={userInputs.email}
                                    onChange={e => setUserInputs({ ...userInputs, email: e.target.value })}
                                    type="email"
                                    placeholder="name@example.com"
                                />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control
                                    value={userInputs.password}
                                    onChange={e => setUserInputs({ ...userInputs, password: e.target.value })}
                                    type="password"
                                    placeholder="Password"
                                />
                            </FloatingLabel>
                            <div className='mt-4'>
                                <button
                                    type="submit"
                                    style={{ backgroundColor: '#171717', color: 'white', width: '100%', height: '45px' }}
                                    className='btn rounded-0'
                                >
                                    {insideRegister ? 'Register' : 'Login'}
                                </button>
                                <p style={{ color: 'black' }} className='mt-3 text-center'>
                                    {insideRegister ? (
                                        <>Already have an account? Click here to <Link style={{ color: '#171717' }} to={'/login'}>Login</Link></>
                                    ) : (
                                        <>New user? Click here to <Link style={{ color: '#171717' }} to={'/register'}>Register</Link></>
                                    )}
                                </p>
                            </div>
                        </Form>
                    </div>
                </div>

                {/* Main Content for Large Screens */}
                <div className='d-none d-lg-flex flex-column align-items-center justify-content-center' style={{ height: '100%' }}>
                    <div className='text-center'>
                        {/* <p className='text-light' style={{ 
              fontSize: '40px', 
              fontWeight: '600', 
              marginBottom: '50px', 
              
             
            }}>
              THE GAMES HAVE A WHOLE <br /> NEW ENERGY!
            </p> */}
                        <img src={logo} alt="logo"  />
                    </div>
                </div>
            </div>

            {/* Side Column for Large Screens */}
            <div className='col-lg-4 d-none d-lg-flex justify-content-center align-items-center' style={{ backgroundColor: '#171717', height: '100%', position: 'relative' }}>
                {/* Overlapping Box */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    right: '50%',
                    transform: 'translateY(-50%)',
                    width: '500px',
                    zIndex: 3
                }}>
                    <Link to={'/'} style={{ textDecoration: 'none' }} className='text-secondary mb-2 '>
                       <ArrowBackIosIcon style={{fontSize
                        :'1rem'
                       }}/> Back to Home
                    </Link>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '30px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                    }} className='card-shadow rounded-0'>
                        {/* Content of the overlapping box */}
                        <h6 style={{ color: 'grey' }} className='text-center'>
                            {insideRegister ? 'New user' : 'Sign in'}
                        </h6>

                        <h5 style={{ color: 'black' }} className='fw-bolder text-center'>
                            {insideRegister ? 'Register' : 'Login to your account'}
                        </h5>

                        <Form onSubmit={handleSubmit}>
                            {insideRegister &&
                                <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                                    <Form.Control
                                        value={userInputs.username}
                                        onChange={e => setUserInputs({ ...userInputs, username: e.target.value })}
                                        type="text"
                                        placeholder="Username"
                                    />
                                </FloatingLabel>
                            }
                            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                <Form.Control
                                    value={userInputs.email}
                                    onChange={e => setUserInputs({ ...userInputs, email: e.target.value })}
                                    type="email"
                                    placeholder="name@example.com"
                                />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control
                                    value={userInputs.password}
                                    onChange={e => setUserInputs({ ...userInputs, password: e.target.value })}
                                    type="password"
                                    placeholder="Password"
                                />
                            </FloatingLabel>
                            <div className='mt-4'>
                                <button
                                    type="submit"
                                    style={{ backgroundColor: '#171717', color: 'white', width: '100%', height: '45px' }}
                                    className='btn rounded-0'
                                >
                                    {insideRegister ? 'Register' : 'Login'}
                                </button>
                                <p style={{ color: 'black' }} className='mt-3 text-center'>
                                    {insideRegister ? (
                                        <>Already have an account? Click here to <Link style={{ color: '#171717' }} to={'/login'}>Login</Link></>
                                    ) : (
                                        <>New user? Click here to <Link style={{ color: '#171717' }} to={'/register'}>Register</Link></>
                                    )}
                                </p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Authentication;