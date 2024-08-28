import React from 'react'

function Overview() {
    return (
        <div style={{ backgroundColor: 'black' }} className='vh-100 d-flex align-items-center justify-content-center'>
            <div className='container bg-dark h-50 d-flex align-items-center justify-content-center border border-secondary rounded  position-relative'>
                <div className='d-grid gap-3 w-100'>
                    <button className='btn btn-lg btn-outline-light rounded-0'>All Users</button>
                    <button className='btn btn-lg btn-outline-light rounded-0'>Pre-Booked Users</button>
                </div>
                <button className='position-absolute bottom-0 end-0 me-2 mb-2'>Logout</button>

            </div>
        </div>
    )
}

export default Overview