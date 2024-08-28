// import React from 'react'
// import { Link } from 'react-router-dom'

// function Overview() {
//     return (
//         <div style={{ backgroundColor: 'black' }} className='vh-100 d-flex align-items-center justify-content-center'>
//             <div className='container bg-dark h-75 d-flex align-items-center justify-content-center border border-secondary rounded  position-relative'>
//                 <div className='d-grid gap-3 w-100'>
//                     <Link to={'/admin/all-users'}><button className='btn btn-lg btn-outline-light rounded-0'>All Users</button></Link>
//                     <Link to={'/admin/booked-users'}><button className='btn btn-lg btn-outline-light rounded-0'>Pre-Booked Users</button></Link>
//                 </div>
//                 <button className='position-absolute bottom-0 end-0 me-2 mb-2'>Logout</button>

//             </div>
//         </div>
//     )
// }

// export default Overview
import React from 'react';
import { Link } from 'react-router-dom';

function Overview() {
    return (
        <div style={{ backgroundColor: 'black' }} className='vh-100 d-flex align-items-center justify-content-center'>
            <div className='container bg-dark h-75 d-flex border border-secondary rounded position-relative'>
                {/* Sidebar */}
                <div style={{ width: '250px', backgroundColor: '#343a40', borderRight: '1px solid #6c757d', height: '100%' }} className='d-flex flex-column p-2'>
                    <Link to='/admin/all-users' className='text-decoration-none mb-2'>
                        <button className='btn btn-lg btn-outline-light rounded-0 w-100'>All Users</button>
                    </Link>
                    <Link to='/admin/booked-users' className='text-decoration-none mb-2'>
                        <button className='btn btn-lg btn-outline-light rounded-0 w-100'>Pre-Booked Users</button>
                    </Link>
                    <div className='mt-auto'>
                        <Link to='/logout' className='text-decoration-none'>
                            <button className='btn btn-lg btn-outline-light rounded-0 w-100'>Logout</button>
                        </Link>
                    </div>
                </div>
                {/* Main Content */}
                <div className='flex-grow-1 d-flex align-items-center justify-content-center p-3'>
                    <div className='w-100 d-flex flex-wrap gap-3'>
                        {/* Box 1 */}
                        <div className='bg-secondary text-light p-3 rounded d-flex flex-column align-items-center justify-content-center' style={{ width: '30%' }}>
                            <h4>Total Users</h4>
                            <p>1234</p>
                        </div>
                        {/* Box 2 */}
                        <div className='bg-secondary text-light p-3 rounded d-flex flex-column align-items-center justify-content-center' style={{ width: '30%' }}>
                            <h4>Active Users</h4>
                            <p>567</p>
                        </div>
                        {/* Box 3 */}
                        <div className='bg-secondary text-light p-3 rounded d-flex flex-column align-items-center justify-content-center' style={{ width: '30%' }}>
                            <h4>Pre-Booked Users</h4>
                            <p>89</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;

