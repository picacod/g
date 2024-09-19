import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import styles from '../../styles/ResetPassword.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import axios from 'axios'; 

const PasswordField = ({ label, placeholder, showPassword, onTogglePassword, value, onChange, validationErrors }) => {
    return (
        <FloatingLabel controlId={`floatingPassword-${label}`} label={label} className={`${styles.passwordField} mb-3`}>
            <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={{ borderRadius: '0px' }}
                required
                isInvalid={!!validationErrors} // Highlight field if there are errors
            />
            <Button
                variant="link"
                onClick={onTogglePassword}
                className={styles.passwordToggleButton}
                aria-label={showPassword ? "Hide password" : "Show password"}
            >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
            </Button>
            <Form.Control.Feedback type="invalid">
                {validationErrors}
            </Form.Control.Feedback>
        </FloatingLabel>
    );
};

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

function ResetPassword() {
    const { uid, token } = useParams(); // Get the uid and token from the URL
    const navigate = useNavigate();

    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [newPasswordErrors, setNewPasswordErrors] = useState('');
    const [confirmPasswordErrors, setConfirmPasswordErrors] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate new password
        const newPasswordValidation = validatePassword(newPassword);
        if (newPasswordValidation) {
            setNewPasswordErrors(newPasswordValidation);
            setError('');
            return;
        } else {
            setNewPasswordErrors('');
        }

        // Validate confirm password
        if (newPassword !== confirmPassword) {
            setConfirmPasswordErrors("Passwords do not match.");
            setError('');
            return;
        } else {
            setConfirmPasswordErrors('');
        }
    
        try {
            // Debugging: Check payload before sending
            console.log({
                uid,
                token,
                new_password: newPassword,
            });
    
            const response = await axios.post('https://gamebackend.pythonanywhere.com/api/password-reset-confirm/', {
                uid,
                token,
                new_password: newPassword,
            });
            
            setMessage(response.data.message);
            setError('');
            navigate('/login');
        } catch (err) {
            // Debugging: Check error response
            console.error('Error response:', err.response);
            setError(err.response?.data?.error || 'An error occurred.');
            setMessage('');
        }
    };

    return (
        <div style={{ backgroundColor: 'black' }} className="vh-100 d-flex align-items-center justify-content-center">
            <div className="col-12 col-md-4 container">
                <h3 className='mb-4'>Reset Password</h3>
                <form onSubmit={handleSubmit}>
                    <PasswordField
                        label="New Password"
                        placeholder="New Password"
                        showPassword={showNewPassword}
                        onTogglePassword={() => setShowNewPassword(!showNewPassword)}
                        value={newPassword}
                        onChange={(e) => {
                            setNewPassword(e.target.value);
                            const errors = validatePassword(e.target.value);
                            setNewPasswordErrors(errors);
                        }}
                        validationErrors={newPasswordErrors}
                    />
                    <PasswordField
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        showPassword={showConfirmPassword}
                        onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            setConfirmPasswordErrors(newPassword !== e.target.value ? 'Passwords do not match.' : '');
                        }}
                        validationErrors={confirmPasswordErrors}
                    />
                    <button
                        style={{ backgroundColor: '#171717', color: 'white' }}
                        type="submit"
                        size="lg"
                        className="me-auto btn px-4 rounded-0"
                    >
                        Reset
                    </button>
                </form>
                {message && <p className="text-success mt-3">{message}</p>}
                {error && <p className="text-danger mt-3">{error}</p>}
            </div>
        </div>
    );
}

export default ResetPassword;
