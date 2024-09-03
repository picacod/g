import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


function AddCharacter() {

    return (
        <div className='vh-100 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'black' }}>
            <div className='container h-75 bg-dark'>
                <Form className='p-3'>
                <p className='text-secondary text-center fs-4'>Add Characters</p>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='text-secondary'>Id</Form.Label>
                        <Form.Control type="number" placeholder="Id" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-secondary'>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-secondary'>Image</Form.Label>
                        <Form.Control type="file" placeholder="Iamge" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-secondary'>Price</Form.Label>
                        <Form.Control type="text" placeholder="Price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-secondary'>Description</Form.Label>
                        <Form.Control type="text" placeholder="Description" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Link to={'/admin/overview'} className='btn text-secondary'>Back</Link>
                </Form>
            </div>
        </div>
    );
}

export default AddCharacter;
