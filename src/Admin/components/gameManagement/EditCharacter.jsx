

import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

function EditCharacter({ show, handleClose, character, setCharacters, characters }) {
    const [formData, setFormData] = useState({
        name: '',
        desc: '',
        img: null, // handle image separately
        price: ''
    });

    useEffect(() => {
        if (character) {
            setFormData({
                name: character.name || '',
                desc: character.desc || '',
                img: null,
                price: character.price || ''
            });
        }
    }, [character]);

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: name === 'img' ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('desc', formData.desc);
        if (formData.img) formDataToSend.append('img', formData.img);
        formDataToSend.append('price', formData.price);

        axios.put(`https://gamebackend.pythonanywhere.com/api/Update_character/${character.id}/`, formDataToSend, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            const updatedCharacter = response.data;
            setCharacters(characters.map(c => (c.id === updatedCharacter.id ? updatedCharacter : c)));
            handleClose();
        })
        .catch(error => {
            console.error('Error updating character:', error.response ? error.response.data : error.message);
            alert('Error updating character');
        });
    };


   

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Character</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {character ? (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formCharacterName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name || ''}
                                onChange={handleInputChange}
                                placeholder="Name"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCharacterImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="file"
                                name="img"
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCharacterPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="text"
                                name="price"
                                value={formData.price || ''}
                                onChange={handleInputChange}
                                placeholder="Price"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCharacterDesc">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="desc"
                                value={formData.desc || ''}
                                onChange={handleInputChange}
                                placeholder="Description"
                            />
                        </Form.Group>

                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                ) : (
                    <p>Loading...</p>
                )}
            </Modal.Body>
        </Modal>
    );
}

export default EditCharacter;

