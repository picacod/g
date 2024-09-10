import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

function EditWeapon({ show, handleClose, weapon, setWeapons, weapons }) {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        img: null, 
    });

    useEffect(() => {
        if (weapon) {
            setFormData({
                name: weapon.name || "",
                description: weapon.description || "",
                img: null, // Reset image if you don't want to keep the previous one
            });
        }
    }, [weapon]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            img: e.target.files[0], // Handle file input
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();

        if (formData.name) {
            data.append('name', formData.name);
        }
        if (formData.description) {
            data.append('description', formData.description);
        }
        if (formData.img) {
            data.append('img', formData.img); // Append file if present
        }

        axios
            .put(`https://gamebackend.pythonanywhere.com/api/update_weapon/${weapon.id}/`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                setWeapons(weapons.map((w) =>
                    w.id === weapon.id ? response.data : w
                ));
                handleClose();
            })
            .catch((error) => {
                console.error("Error updating weapon:", error);
                alert("Error updating weapon");
            });
    };
      
  
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Weapon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formWeaponName">
              <Form.Label>Weapon Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter weapon name"
              />
            </Form.Group>
            <Form.Group controlId="formWeaponDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter weapon description"
              />
            </Form.Group>
            <Form.Group controlId="formWeaponImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="img"
                onChange={handleFileChange} // File change handler
              />
            </Form.Group>
           
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
  
  export default EditWeapon;