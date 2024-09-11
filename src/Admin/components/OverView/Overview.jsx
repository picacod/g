import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import ChartView from './ChartView.jsx'

function Overview() {
    const [userCounts, setUserCounts] = useState({ total_users: 0, prebooked_users: 0, characters: 0 });
    const isResponsive = useMediaQuery({ maxWidth: 768 });



    useEffect(() => {
        // Fetch the user counts from the backend
        axios.get('https://gamebackend.pythonanywhere.com/api/user_counts/')
            .then(response => {
                setUserCounts(response.data);
            })
            .catch(error => {
                console.error('Error fetching user counts:', error);
            });
    }, []);

    const handleLogout = () => {
        axios.post('https://gamebackend.pythonanywhere.com/api/adminlogout/')
            .then(response => {
                sessionStorage.clear();
                localStorage.clear();
                // Redirect to login page or handle successful logout
                window.location.href = 'admin/admin-login'; // Change the redirect path as needed
            })
            .catch(error => {
                console.error('Error logging out:', error);
                alert('Error logging out. Please try again.');
            });
    };

    return (
        <div style={{
            backgroundColor: 'black',
            backgroundImage: 'url("https://c.wallhere.com/photos/3d/26/1680x1050_px_action_Dark_fantasy_fi_Fighting_sci_war-1610933.jpg!d")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
        }} className='vh-100 d-flex align-items-center justify-content-center'>
            {/* Dark Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.9)', // Adjust the opacity as needed
                zIndex: 1
            }}></div>
            <div className='container h-75 d-flex border border-secondary position-relative p-0' style={{ zIndex: 2 }}>
                {/* Sidebar */}
                <div style={{ width: '250px', backgroundColor: '', borderRight: '1px solid #6c757d', height: '100%' }} className='d-flex flex-column p-2'>
                    <Link to='/admin/all-users' className='text-decoration-none mb-2 d-flex align-items-center'>
                        <button className='btn btn-lg btn-outline-light rounded-0 w-100'>
                            {!isResponsive ? 'All Users' : <i className='fas fa-users'></i>}
                        </button>
                    </Link>
                    <Link to='/admin/booked-users' className='text-decoration-none mb-2 d-flex align-items-center'>
                        <button className='btn btn-lg btn-outline-light rounded-0 w-100'>
                            {!isResponsive ? 'Pre-Booked Users' : <i className='fas fa-user-check'></i>}
                        </button>
                    </Link>
                    <Link to='/admin/character' className='text-decoration-none mb-2 d-flex align-items-center'>
                        <button className='btn btn-lg btn-outline-light rounded-0 w-100'>
                            {!isResponsive ? 'Characters' : <i className="fa-solid fa-user-ninja"></i>}
                        </button>
                    </Link>
                    <Link to='/admin/add-character' className='text-decoration-none mb-2 d-flex align-items-center'>
                        <button className='btn btn-lg btn-outline-light rounded-0 w-100'>
                            {!isResponsive ? 'Add Characters' : <i className="fa-solid fa-plus"></i>}
                        </button>
                    </Link>
                    <Link to='/admin/add-weapons' className='text-decoration-none mb-2 d-flex align-items-center'>
                        <button className='btn btn-lg btn-outline-light rounded-0 w-100'>
                            {!isResponsive ? 'Add Weapons' : <i className="fa-solid fa-plus"></i>}
                        </button>
                    </Link>
                    <Link to='/admin/weapons' className='text-decoration-none mb-2 d-flex align-items-center'>
                        <button className='btn btn-lg btn-outline-light rounded-0 w-100'>
                            {!isResponsive ? 'Weapons' : <i className="fa-solid fa-plus"></i>}
                        </button>
                    </Link>
                    <Link to='/admin/add-skills' className='text-decoration-none mb-2 d-flex align-items-center'>
                        <button className='btn btn-lg btn-outline-light rounded-0 w-100'>
                            {!isResponsive ? 'Add Skills' : <i className="fa-solid fa-plus"></i>}
                        </button>
                    </Link>
                    <Link to='/admin/skills' className='text-decoration-none mb-2 d-flex align-items-center'>
                        <button className='btn btn-lg btn-outline-light rounded-0 w-100'>
                            {!isResponsive ? 'Skills' : <i className="fa-solid fa-plus"></i>}
                        </button>
                    </Link>
                    <Link to='/admin/add-news' className='text-decoration-none mb-2 d-flex align-items-center'>
                        <button className='btn btn-lg btn-outline-light rounded-0 w-100'>
                            {!isResponsive ? ' Add News & Updates' : <i className="fa-solid fa-plus"></i>}
                        </button>
                    </Link>

                    <Link to='/admin/news' className='text-decoration-none mb-2 d-flex align-items-center'>
                        <button className='btn btn-lg btn-outline-light rounded-0 w-100'>
                            {!isResponsive ? ' News & Updates' : <i className="fa-solid fa-plus"></i>}
                        </button>
                    </Link>
                    <Link to='/admin/messages' className='text-decoration-none mb-2 d-flex align-items-center'>
                        <button className='btn btn-lg btn-outline-light rounded-0 w-100'>
                            {!isResponsive ? ' Messages' : <i className="fa-solid fa-plus"></i>}
                        </button>
                    </Link>

                    <div className='mt-auto d-flex align-items-center'>
                        <Link to='/logout' className='text-decoration-none w-100'>
                            <button className='btn btn-lg btn-outline-light rounded-0 w-100' onClick={handleLogout}>
                                {!isResponsive ? 'Logout' : <i className='fas fa-sign-out-alt'></i>}
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Main Content */}
                <div className='flex-grow-1 d-flex flex-column align-items-top justify-content-start p-3' style={{ overflowY: 'auto', maxHeight: '100vh' }}>
                    {/* Boxes Row */}
                    <div className='row w-100'>
                        {/* Box 1 */}
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <div className='bg-dark text-light p-3 rounded d-flex flex-column align-items-center justify-content-center'>
                                <h4>Total Users</h4>
                                <p>{userCounts.total_users}</p>
                            </div>
                        </div>
                        {/* Box 2 */}
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <div className='bg-dark text-light p-3 rounded d-flex flex-column align-items-center justify-content-center'>
                                <h4>Pre-Booked Users</h4>
                                <p>{userCounts.prebooked_users}</p>
                            </div>
                        </div>
                        {/* Box 3 */}
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <div className='bg-dark text-light p-3 rounded d-flex flex-column align-items-center justify-content-center'>
                                <h4>Total Characters</h4>
                                <p>{userCounts.characters}</p>
                            </div>
                        </div>
                        {/* Box 4 */}
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <div className='bg-dark text-light p-3 rounded d-flex flex-column align-items-center justify-content-center'>
                                <h4>Verified Users</h4>
                                <p>{userCounts.verified_users}</p>
                            </div>
                        </div>
                    </div>
                    {/* Chart */}
                    <div className='w-100 h-100'>

                        <p>User Registration Overview   </p>
                        <ChartView/>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Overview;