import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AddNewsAndUpdates() {
    const [newsData, setNewsData] = useState({
        title: '',
        content: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewsData({
            ...newsData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setNewsData({
            ...newsData,
            [name]: files[0] // Handle file input
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', newsData.title);
        formData.append('content', newsData.content);
        formData.append('image', newsData.image); 

        axios.post('https://gamebackend.pythonanywhere.com/api/add_news/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('There was an error uploading the news!', error);
        });
    };

    return (
        <div className='vh-100 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'black' }}>
            <div className='container h-75 bg-secondary'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 mt-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Title" 
                            name="title" 
                            value={newsData.title} 
                            onChange={handleChange} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicContent">
                        <Form.Label>Content</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={4} 
                            placeholder="Content" 
                            name="content" 
                            value={newsData.content} 
                            onChange={handleChange} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicImage">
                        <Form.Label>Image</Form.Label>
                        <Form.Control 
                            type="file" 
                            name="image" 
                            onChange={handleFileChange} 
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Link to={'/admin/overview'} className='btn ms-2'>Back</Link>
                </Form>
            </div>
        </div>
    );
}

export default AddNewsAndUpdates;
