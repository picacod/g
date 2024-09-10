import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

function EditNews({ show, handleClose, newsItem, setNews, newsList }) {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        image: null, 
    });

    useEffect(() => {
        if (newsItem) {
            setFormData({
                title: newsItem.title || "",
                content: newsItem.content || "",
                image: null, // Reset image if you don't want to keep the previous one
            });
        }
    }, [newsItem]);

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
            image: e.target.files[0], // Handle file input
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();

        if (formData.title) {
            data.append('title', formData.title);
        }
        if (formData.content) {
            data.append('content', formData.content);
        }
        if (formData.image) {
            data.append('image', formData.image); // Append file if present
        }

        axios
            .put(`https://gamebackend.pythonanywhere.com/api/edit_news/${newsItem.id}/`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                setNews(newsList.map((n) =>
                    n.id === newsItem.id ? response.data : n
                ));
                handleClose();
            })
            .catch((error) => {
                console.error("Error updating news:", error);
                alert("Error updating news");
            });
    };
      
  
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit News</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNewsTitle">
              <Form.Label>News Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter news title"
              />
            </Form.Group>
            <Form.Group controlId="formNewsContent">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Enter news content"
              />
            </Form.Group>
            <Form.Group controlId="formNewsImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
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
  
  export default EditNews;