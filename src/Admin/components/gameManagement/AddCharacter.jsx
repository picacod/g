import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios';


function AddCharacter() {
    const [characterData, setCharacterData] = useState({
        name: '',
        desc: '',
        img: null,
        video:null,
        price: '',
        release_date:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCharacterData({
            ...characterData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setCharacterData({
            ...characterData,
            [name]: files[0] // Handle file input
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', characterData.name);
        formData.append('desc', characterData.desc);
        formData.append('img', characterData.img);
        formData.append('video', characterData.video); 
        formData.append('price', characterData.price);
        formData.append('release_date', characterData.release_date);

        axios.post('https://gamebackend.pythonanywhere.com/api/add_character/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('There was an error uploading the character!', error);
        });
        
    };


    return (
        <div className='vh-100 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'black' }}>
            <div className='container h-75 bg-secondary'>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Name" 
                            name="name" 
                            value={characterData.name} 
                            onChange={handleChange} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Description" 
                            name="desc" 
                            value={characterData.desc} 
                            onChange={handleChange} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Image</Form.Label>
                        <Form.Control 
                            type="file" 
                            placeholder="Image" 
                            name="img" 
                            onChange={handleFileChange} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Video</Form.Label> {/* New video field */}
                        <Form.Control 
                            type="file" 
                            placeholder="Video" 
                            name="video" 
                            onChange={handleFileChange} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Price</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Price" 
                            name="price" 
                            value={characterData.price} 
                            onChange={handleChange} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Release Date</Form.Label>
                        <Form.Control 
                            type="date" 
                            placeholder="Release Date" 
                            name="release_date" 
                            value={characterData.release_date} 
                            onChange={handleChange} 
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Link to={'/admin/overview'} className='btn'>Back</Link>
                </Form>
            </div>
        </div>
    );
}

export default AddCharacter;