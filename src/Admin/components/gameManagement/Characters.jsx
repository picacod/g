

import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EditCharacter from './EditCharacter';

function Characters() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleShow = (character) => {
        setSelectedCharacter(character);
        setShowModal(true);
    };
    
    const handleClose = () => setShowModal(false);

    useEffect(() => {
        axios.get('https://gamebackend.pythonanywhere.com/api/admin_characters/')
            .then(response => {
                setCharacters(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching characters:', error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (characterId) => {
        axios.delete(`https://gamebackend.pythonanywhere.com/api/Update_character/${characterId}/`)
            .then(() => {
                // Remove the deleted character from the state
                setCharacters(characters.filter(c => c.id !== characterId));
            })
            .catch(error => {
                console.error('Error deleting character:', error.response ? error.response.data : error.message);
                alert('Error deleting character');                
            });
    };


    return (
        <div className='vh-100 d-flex flex-column ' style={{ backgroundColor: 'black',paddingTop:'10rem' }}>
            <div className='w-100 container d-flex justify-content-between'>
                <p className='text-light'>Characters</p>
                <Link to={'/admin/overview'}>Back</Link>
            </div>
            {/* Search bar */}
            <div className='w-100 container'>
                <div className='p-1 bg-light rounded-0 shadow-sm mb-3'>
                    <div className='input-group'>
                        <input
                            type='text'
                            placeholder='Search Characters'
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
                            <th scope="col">CharacterId</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Image</th>
                   
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Uploaded Date</th>
                            <th scope="col">Release Date</th>
                            <th scope="col">Edit</th>          
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {loading ? (
                            <tr><td colSpan="9" className="text-center">Loading...</td></tr>
                        ) : characters.length > 0 ? (
                            characters.map((character, index) => (
                                <tr key={character.id}>
                                    <td>{index + 1}</td>
                                    <th scope="row">{character.id }</th>
                                    <td>{character.name}</td>
                                    <td><img src={`https://gamebackend.pythonanywhere.com/${character.img}`} alt={character.name} style={{ width: '100px', height: 'auto' }} /></td>
                                    <td>{character.desc}</td>
                                    <td>{character.price}</td>
                                    <td>{new Date(character.created_at).toLocaleDateString()}</td>
                                    <td>{character.release_date}</td>
                                    <td><button onClick={() => handleShow(character)}>Edit</button></td>
                                    <td>
                                        <div className='d-flex'>
                                            <button className='btn text-light' onClick={() => handleDelete(character.id)}>
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" className="text-center">No Characters found</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
            <EditCharacter
                show={showModal}
                handleClose={handleClose}
                character={selectedCharacter}
                setCharacters={setCharacters}
                characters={characters}
            />
        </div>
    )
}

export default Characters