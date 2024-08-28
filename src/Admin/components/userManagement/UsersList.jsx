import React from 'react'
import { Table } from 'react-bootstrap';

function UsersList() {
    return (
        <div className='vh-100 d-flex flex-column align-items-center justify-content-center' style={{ backgroundColor: 'black' }}>
            <p className='text-light'>All Users</p>
            {/* Search bar */}
            <div className='w-100 container'>
                <div className='p-1 bg-light rounded-0 shadow-sm mb-3'>
                    <div className='input-group'>
                        <input
                            type='text'
                            placeholder='Search Username'
                            aria-describedby='button-addon1'
                            className='form-control border-0 bg-light'
                            style={{ boxShadow: 'none', borderRadius: '1rem' }}

                        />
                        <div className='input-group-append'>
                            <button
                                id='button-addon1'
                                type='button'
                                className='btn btn-link text-danger'
                            >
                                <i className='fa fa-search'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-100 container' style={{ maxHeight: '35rem', overflowY: 'auto' }}>
                <Table striped bordered hover variant='dark'>
                    <thead className='sticky-top'>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">UserId</th>
                            <th scope="col">Date</th>
                            <th scope="col">Email</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Verified</th>
                            <th scope="col">Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <th scope="row">1</th>
                            <td>01/01/2024</td>
                            <td>example@example.com</td>
                            <td>John Doe</td>
                            <td style={{ color: 'white' }}>Yes</td>
                            <td>
                                <div className='d-flex'>
                                    <button className='btn text-light'>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <th scope="row">2</th>
                            <td>02/01/2024</td>
                            <td>example2@example.com</td>
                            <td>Jane Smith</td>
                            <td style={{ color: 'red' }}>No</td>
                            <td>
                                <div className='d-flex'>
                                    <button className='btn text-light'>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="7" className="text-center">No users found</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default UsersList