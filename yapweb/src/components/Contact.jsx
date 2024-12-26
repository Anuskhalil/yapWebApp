import React, { useState } from 'react';
import { Container, Form, Button, Alert, Modal } from 'react-bootstrap';
import { submitContactForm } from '../services/api'; // Import the API function

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({ success: false, error: false });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await submitContactForm(formData); // Send form data to backend
      console.log('Response:', response.data);

      // Show success modal
      setModalMessage('Your message has been sent successfully!');
      setStatus({ success: true, error: false });
      setShowModal(true);

      // Clear the form inputs
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);

      // Show error modal
      setModalMessage('There was an error sending your message. Please try again later.');
      setStatus({ success: false, error: true });
      setShowModal(true);
    }
  };

  return (
    <Container id="contact" className="my-5">
      <h2>Contact Us</h2>
      {status.success && <Alert variant="success">Message sent successfully!</Alert>}
      {status.error && <Alert variant="danger">An error occurred. Please try again later.</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Enter your message"
            required
          />
        </Form.Group>

        <Button className="mt-3 fw-bold hero-button" type="submit">
          Submit
        </Button>
      </Form>

      {/* Modal for feedback */}
      <Modal className='bg-dark' show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-white fw-bold'>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Contact;
