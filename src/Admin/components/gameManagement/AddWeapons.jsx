import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function AddWeapons() {
  const [characters, setCharacters] = useState([]);
  const [weaponData, setWeaponData] = useState({
    character: '',
    name: '',
    description: '',
    img: null,
  });

  useEffect(() => {
    // Fetch all characters for the dropdown
    axios.get('https://gamebackend.pythonanywhere.com/api/characters/')
      .then((res) => {
        console.log('caracters:',res.data);
        
        setCharacters(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWeaponData({
      ...weaponData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setWeaponData({
      ...weaponData,
      img: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('character', weaponData.character);
    formData.append('name', weaponData.name);
    formData.append('description', weaponData.description);
    formData.append('img', weaponData.img);

    axios.post('https://gamebackend.pythonanywhere.com/api/weapons_add/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        alert('Weapon added successfully');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className='vh-100 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'black' }}>
      <div className='container h-75 bg-secondary'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 mt-3" controlId="formCharacterSelect">
            <Form.Label>Select Character</Form.Label>
            <Form.Control
              as="select"
              name="character"
              value={weaponData.character}
              onChange={handleInputChange}
              className="form-control"
              required
            >
              <option value="">Select a Character</option>
              {characters.map((character) => (
                <option key={character.id} value={character.id}>
                  {character.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formWeaponName">
            <Form.Label>Weapon Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Weapon Name" 
              name="name" 
              value={weaponData.name} 
              onChange={handleInputChange} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formWeaponDescription">
            <Form.Label>Weapon Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Weapon Description"
              name="description"
              value={weaponData.description}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formWeaponImage">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control 
              type="file" 
              name="img" 
              onChange={handleFileChange} 
              required 
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Weapon
          </Button>
          <Link to={'/admin/overview'} className='btn btn-light ml-2'>
            Back
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default AddWeapons;
