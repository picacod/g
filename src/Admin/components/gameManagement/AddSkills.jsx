import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export default function AddSkills() {
  const [characters, setCharacters] = useState([]);
  const [formData, setFormData] = useState({
    character: '',
    name: '',
  });

  useEffect(() => {
    // Fetch all characters for the dropdown
    axios.get('https://gamebackend.pythonanywhere.com/api/characters/')
      .then((res) => {
        setCharacters(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Handle input change for form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://gamebackend.pythonanywhere.com/api/add_skills/', formData)
      .then((res) => {
        alert('Skill added successfully!');
        setFormData({ character: '', name: '' }); // Reset form after submission
      })
      .catch((err) => {
        console.error(err);
        alert('Error adding skill');
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
              value={formData.character}
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

          <Form.Group className="mb-3" controlId="formSkillName">
            <Form.Label>Skill Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Skill Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Skill
          </Button>
          <Link to={'/admin/overview'} className='btn btn-light ml-2'>
            Back
          </Link>
        </Form>
      </div>
    </div>
  );
}
