import React, { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { GoogleLogin } from '@react-oauth/google';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useSnackbar } from 'notistack';
import oldpaper from '../../assets/paper.png'
import styles from '../styles/ResetPassword.module.css'
import CircularProgress from '@mui/material/CircularProgress';


const PasswordField = ({ label, placeholder, showPassword, onTogglePassword, name, value, onChange, validationErrors }) => (
  <div className="position-relative mb-3">
    <FloatingLabel controlId={`floatingPassword-${label}`} label={label} className={`${styles.passwordField}`}>
      <Form.Control
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        style={{
          borderRadius: '0px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          color: '#fff',
        }}
        isInvalid={!!validationErrors}
      />
      <Button
        variant="link"
        onClick={onTogglePassword}
        className={styles.passwordToggleButton}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </Button>

    </FloatingLabel>
    {/* Error message display */}
    {validationErrors && (
      <div className={styles.errorText}>
        {validationErrors}
      </div>
    )}
  </div>
);


function Authentication({ insideRegister }) {
  const [userInputs, setUserInputs] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [validationErrors, setValidationErrors] = useState('');
  const [passwordErrors, setPasswordErrors] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('')
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  axios.defaults.headers.common['X-CSRFToken'] = getCookie('csrftoken');

  console.log(loginError);

  function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
  }

  // Password validation function
  const validatePassword = (password) => {
    let errors = '';
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      errors = `Password must be at least ${minLength} characters long.`;
    } else if (!hasUppercase) {
      errors = 'Password must contain at least one uppercase letter.';
    } else if (!hasLowercase) {
      errors = 'Password must contain at least one lowercase letter.';
    } else if (!hasNumber) {
      errors = 'Password must contain at least one number.';
    } else if (!hasSpecialChar) {
      errors = 'Password must contain at least one special character.';
    }
    return errors;
  };

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    setUserInputs({ ...userInputs, [name]: value });
    if (name === 'password') {
      const errors = validatePassword(value);
      setPasswordErrors(errors);
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const passwordValidation = validatePassword(userInputs.password);
    if (passwordValidation) {
      setValidationErrors(passwordValidation);
      return;
    } else {
      setValidationErrors(''); // Clear errors if password is valid
    }


    const endpoint = insideRegister ? 'https://gamebackend.pythonanywhere.com/api/register/' : 'https://gamebackend.pythonanywhere.com/api/login/';

    // Prepare the data
    const data = insideRegister ? {
      username: userInputs.username,
      email: userInputs.email,
      password: userInputs.password
    } : {
      email: userInputs.email,
      password: userInputs.password
    };

    try {
      setLoading(true); // Start loader when the form is submitted

      // Make the API call
      const response = await axios.post(endpoint, data);

      // Check for registration success
      if (insideRegister) {
        if (response.data.message === 'User registered successfully. A verification email has been sent.') {
          // setSuccessMessage(response.data.message);
          // setErrorMessage('');
          enqueueSnackbar(response.data.message, { variant: 'success', autoHideDuration: 2500 });
          localStorage.setItem('user_id', response.data.user_id);
          navigate('/verify-otp');
        } else {
          // setErrorMessage('Error: User already exists or another issue occurred');
          // setSuccessMessage('');     
          enqueueSnackbar(' User already exists or another issue occurred', { variant: 'error', autoHideDuration: 2500 });
        }
      } else {
        // Handle login success
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('refresh_token', response.data.refresh_token);
        sessionStorage.setItem('user_id', response.data.user_id);
        enqueueSnackbar('Logged in successfully!', { variant: 'success', autoHideDuration: 2500 });
        navigate('/');
      }
    } catch (error) {
      console.error("Error during API call:", error);
      setLoginError(error.response?.data?.message || 'An error occurred');


      enqueueSnackbar(error.response?.data?.message || 'An error occurred', { variant: 'error', autoHideDuration: 2500 });
    }
  };






  const handleGoogleSuccess = async (response) => {
    try {
      const res = await axios.post('https://gamebackend.pythonanywhere.com/api/google_login/', {
        id_token: response.credential // Use id_token instead of token
      });
      localStorage.setItem('access_token', res.data.access_token);
      localStorage.setItem('refresh_token', res.data.refresh_token);
      sessionStorage.setItem('user_id', res.data.user_id);
      enqueueSnackbar('Loggined successfully!', {
        variant: 'success',
        autoHideDuration: 2500,
      });
      navigate('/');
    } catch (error) {
      console.error('Google login error:', error);
      enqueueSnackbar('An error occured during google login!', {
        variant: 'success',
        autoHideDuration: 2500,
      });
    }
  };

  const handleGoogleError = (error) => {
    console.error('Google login error:', error);
    enqueueSnackbar('An error occured during google login!', {
      variant: 'success',
      autoHideDuration: 2500,
    });
  };



  return (
    <div style={{ height: '100vh', position: 'relative', backgroundColor: 'black', msOverflowY: 'hidden', overflowX: 'hidden' }} className='d-flex flex-wrap'>
      {/* Main Content Column */}
      <div className='col-lg-8 col-md-12 d-flex flex-column justify-content-center' style={{ position: 'relative', backgroundSize: 'cover', backgroundImage: 'url("https://picacod.github.io/files/fire.gif")', height: '100vh' }}>
        <div className='' style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))',
          zIndex: 1,
        }}></div>
        <div className='text-center d-none'>
          <p className='text-light h2-anim' style={{
            fontSize: '24px',
            fontWeight: '600',
            marginTop: '80px',

            // Responsive text size for small screens
            '@media (min-width: 576px)': {
              fontSize: '20px' // Adjust as needed for medium screens
            }
          }}>
            THE GAMES HAVE A WHOLE <br /> NEW ENERGY!
          </p>
        </div>

        {/* Overlapping Box for Small Screens */}
        <div className='d-lg-none d-flex justify-content-center align-items-center' style={{ height: '100vh', width: '100vw', backgroundColor: 'black' }}>
          <div style={{
            backgroundImage: `url(${oldpaper})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            padding: '70px 10px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '80%', zIndex: '100',
            width: '100%'

          }} className='card-shadow rounded-0 mb-5 '>
            <Link className='text-secondary' style={{ textDecoration: 'none' }} to={'/'}> <ArrowBackIosIcon style={{ fontSize: '1rem' }} /></Link>
            <h5 style={{ color: 'black' }} className='fw-bolder text-center'>
              {insideRegister ? 'Join us today!' : 'Welcome back!'}
            </h5>

            <h6 style={{ color: 'black' }} className='text-center'>
              {insideRegister ? 'Sign up now to become a member' : 'Sign in to your account'}
            </h6>


            <Form onSubmit={handleSubmit}>
              {insideRegister &&
                <FloatingLabel controlId="floatingUsername" label="Username" className="mb-3 w-100">
                  <Form.Control
                    value={userInputs.username}
                    onChange={e => setUserInputs({ ...userInputs, username: e.target.value })}
                    type="text"
                    placeholder="Username"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      color: '#fff'
                    }}
                  />
                </FloatingLabel>
              }
              <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3 w-100">
                <Form.Control
                  value={userInputs.email}
                  onChange={e => setUserInputs({ ...userInputs, email: e.target.value })}
                  type="email"
                  placeholder="name@example.com"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent white background
                    borderColor: 'rgba(255, 255, 255, 0.2)', // Optional: Change border color
                    color: '#fff' // Text color
                  }}
                />
              </FloatingLabel>
              <PasswordField
                label="Password"
                showPassword={showPassword}
                onTogglePassword={() => setShowPassword(!showPassword)}
                name="password"
                value={userInputs.password}
                onChange={handlePasswordChange}
                validationErrors={passwordErrors}
                placeholder="name@example.com"
              />

              <div className='mt-4'>
                <button
                  type="submit"
                  style={{ backgroundColor: '#171717', color: '#b78846', width: '100%', height: '45px' }}
                  className='btn rounded-0 golden-button'
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (insideRegister ? 'Register' : 'Login')}
                </button>
                <div className='d-flex justify-content-between align-items-center w-100 mt-1'>
                  {
                    loginError == 'Verification record not found. Please verify your OTP.' ? <p style={{ color: 'blue', margin: 0 }}>
                      <Link style={{ color: '#171717', fontSize: '0.9rem' }} to={'/resend-otp'}>
                        Verify Otp
                      </Link>
                    </p> : <p></p>
                  }
                  {insideRegister ? null : (
                    <p style={{ color: 'black', margin: 0 }}>
                      <Link style={{ color: '#171717', textDecoration: 'none', fontSize: '0.9rem' }} to={'/forgot-password'}>
                        Forgot password?
                      </Link>
                    </p>

                  )}
                </div>
                <p style={{ color: 'black' }} className='mt-3 text-center'>
                  {insideRegister ? (
                    <>Already have an account? <Link style={{ color: '#fff' }} to={'/login'}>Click here to Login</Link></>
                  ) : (
                    <>New user? <Link style={{ color: '#fff' }} to={'/register'}>Click here to Register</Link></>
                  )}
                </p>
              </div>
              <div className='mt-3 d-flex align-items-center justify-content-center'>
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                />
              </div>
            </Form>

          </div>
        </div>

        {/* Main Content for Large Screens */}
        <div className='d-none d-lg-flex flex-column align-items-center justify-content-center ' style={{ height: '100%' }}>
          <div className='text-center'>
            <p className='text-light h1-anim' style={{
              fontSize: '40px',
              fontWeight: '600',
              marginBottom: '50px',


            }}>
              THE GAMES HAVE A WHOLE <br /> NEW ENERGY!
            </p>
          </div>
        </div>
      </div>

      {/* Side Column for Large Screens */}
      <div className='col-lg-4 d-none d-lg-flex justify-content-center align-items-center ' style={{ backgroundImage: 'url("https://t4.ftcdn.net/jpg/02/20/01/05/240_F_220010501_8bLxNEZBnJlHKLorWN1WvksavwAtLnyJ.jpg")', height: '100%', position: 'relative' }}>
        <div className='' style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1))',
          zIndex: 1,
        }}></div>
        {/* Overlapping Box */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '50%',
          transform: 'translateY(-50%)',
          width: '500px',
          zIndex: 3
        }}>
          <Link to={'/'} style={{ textDecoration: 'none', color: '#b78846' }} className=' mb-2 '>
            <ArrowBackIosIcon style={{
              fontSize
                : '1rem'
            }} /> Back to Home
          </Link>
          <div style={{
            // backgroundColor: 'white',
            backgroundImage: `url(${oldpaper})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            padding: '80px 50px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }} className='card-shadow rounded-0'>
            {/* Content of the overlapping box */}
            <h5 style={{ color: 'black' }} className='fw-bolder text-center'>
              {insideRegister ? 'Join us today!' : 'Welcome back!'}
            </h5>

            <h6 style={{ color: 'black' }} className='text-center'>
              {insideRegister ? 'Sign up now to become a member' : 'Sign in to your account'}
            </h6>

            <Form onSubmit={handleSubmit}>
              {insideRegister &&
                <FloatingLabel controlId="floatinglusername" label="Username" className="mb-3 ">
                  <Form.Control
                    value={userInputs.username}
                    onChange={e => setUserInputs({ ...userInputs, username: e.target.value })}
                    type="text"
                    placeholder="Username"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent white background
                      borderColor: 'rgba(255, 255, 255, 0.2)', // Optional: Change border color
                      color: '#fff' // Text color
                    }}
                  />
                </FloatingLabel>
              }
              <FloatingLabel controlId="floatingemail" label="Email address" className="mb-3">
                <Form.Control
                  value={userInputs.email}
                  onChange={e => setUserInputs({ ...userInputs, email: e.target.value })}
                  type="email"
                  placeholder="name@example.com"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent white background
                    borderColor: 'rgba(255, 255, 255, 0.2)', // Optional: Change border color
                    color: '#fff' // Text color
                  }}
                />
              </FloatingLabel>
              <PasswordField
                label="Password"
                showPassword={showPassword}
                onTogglePassword={() => setShowPassword(!showPassword)}
                name="password"
                value={userInputs.password}
                onChange={handlePasswordChange}
                validationErrors={passwordErrors}
                placeholder="name@example.com"

              />
              <div className='mt-4'>
                <button
                  type="submit"
                  style={{ backgroundColor: '#171717', color: '#b78846', width: '100%', height: '45px' }}
                  className='btn rounded-0 golden-button'
                // disabled={!!validationErrors}
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" /> // Show loader if loading
                  ) : (insideRegister ? 'Register' : 'Login')}
                </button>
                <div className='d-flex justify-content-between align-items-center w-100 mt-1'>
                  {
                    loginError == 'Verification record not found. Please verify your OTP.' ? <p style={{ color: 'blue' }}>
                      <Link style={{ color: '#171717', fontSize: '0.9rem' }} to={'/resend-otp'}>
                        Verify Otp
                      </Link>
                    </p> : <p></p>
                  }
                  {insideRegister ? null : (
                    <p style={{ color: 'black', margin: 0 }}>
                      <Link style={{ color: '#171717', textDecoration: 'none', fontSize: '1rem' }} to={'/forgot-password'}>
                        Forgot password?
                      </Link>
                    </p>

                  )}
                </div>
                <p style={{ color: 'black' }} className='mt-3 text-center'>
                  {insideRegister ? (
                    <>Already have an account ? <Link style={{ color: '#fff' }} to={'/login'}>Click here to Login</Link></>
                  ) : (
                    <>New user? <Link style={{ color: '#fff' }} to={'/register'}>Click here to Register</Link></>
                  )}
                </p>
              </div>

              <div className='mt-3 d-flex align-items-center justify-content-center'>
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                />
              </div>
            </Form>





          </div>
        </div>
      </div>



    </div>
  );
}

export default Authentication;