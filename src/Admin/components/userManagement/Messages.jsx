
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Messages() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://gamebackend.pythonanywhere.com/api/view_contact/')
            .then(response => {
                setContacts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching contacts:', error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (contactId) => {
        if (window.confirm('Are you sure you want to delete this contact?')) {
            axios.delete(`https://gamebackend.pythonanywhere.com/api/delete_contact/${contactId}/`)
                .then(response => {
                    setContacts(contacts.filter(contact => contact.id !== contactId));
                    alert('Contact deleted successfully');
                })
                .catch(error => {
                    console.error('Error deleting contact:', error);
                    alert('Error deleting contact');
                });
        }
    };


  return (
    <div className='vh-100 d-flex flex-column ' style={{ backgroundColor: 'black',paddingTop:'10rem' }}>
    <div className='w-100 container d-flex justify-content-between'>
        <p className='text-light'>Messages</p>
        <Link to={'/admin/overview'}>Back</Link>
    </div>
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
                    <th scope="col">UserId</th>
                    <th scope="col">Date</th>
                    <th scope="col">Email</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Message</th>
                    <th scope="col">Delete User</th>
                </tr>
            </thead>
            <tbody>
              {loading ? (
                            <tr><td colSpan="7" className="text-center">Loading...</td></tr>
                        ) : contacts.length > 0 ? (
                            contacts.map((contact) => (
                                <tr key={contact.id}>
                                    <th scope="row">{contact.id}</th>
                                    <td>{contact.date}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.subject}</td>
                                    <td>{contact.message}</td>
                                    <td>
                                        <div className='d-flex'>
                                            <button className='btn text-light' onClick={() => handleDelete(contact.id)}>
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center">No messages found</td>
                            </tr>
                        )}
            </tbody>
        </Table>
    </div>
</div>
  )
}

export default Messages