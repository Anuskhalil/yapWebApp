import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // For navigation buttons
import { submitContactForm } from '../services/api'; // Import the API function
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({ success: false, error: false });
  const [showContactModal, setShowContactModal] = useState(false);
  const [showSocietyModal, setShowSocietyModal] = useState(false); // State for society modal
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
      setShowContactModal(true);

      // Clear the form inputs
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);

      // Show error modal
      setModalMessage('There was an error sending your message. Please try again later.');
      setStatus({ success: false, error: true });
      setShowContactModal(true);
    }
  };

  return (
    <Container id="contact" className="my-5">
      <Row>
        {/* Left Section */}
        <Col md={6} className="left-section d-flex align-items-center">
          <div className="contact-headings">
            <h2>Contact with Our Team OR <br /> Ask from YAP-Bot for any Queries. </h2>
            <p>
              We are here to assist you with your queries. Feel Free to contact us.
            </p>
            {/* <div className="contact-info">
              <p><strong>📞</strong> +92 30000000000</p>
              <p><strong>📧</strong> yap@gmail.com</p>
              <p><strong>📍</strong> See Our Locations</p>
            </div> */}
            {/* Navigation Buttons */}
            <div className="contact-btn mt-4">
              <h3>What would you like to Join for?</h3>
              <Button
                // variant="primary"
                className="Society-btn me-3"
                onClick={() => navigate('/register')} // Navigate to Internships page
              >
                Internships Registration
              </Button>
              <Button
              className='Society-btn'
                // variant="success"
                onClick={() => setShowSocietyModal(true)} // Show society modal
              >
                Society Registration
              </Button>
            </div>
          </div>
        </Col>

        {/* Right Section: Contact Form */}
        <Col md={6}>
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
        </Col>
      </Row>

      {/* Modal for Contact Form Feedback */}
      <Modal className="bg-dark" show={showContactModal} onHide={() => setShowContactModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-white fw-bold">{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowContactModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Society Registration */}
      <Modal className='societyModal' show={showSocietyModal} onHide={() => setShowSocietyModal(false)} centered>
        <Modal.Header closeButton className='societyHeader'>
          <Modal.Title>Society Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body className='societyBody'>
          <p>
            Before registering, please check out all the societies on our Society Page. If you've already checked, you can proceed to apply.
          </p>
          <div className="contact-modal-btn">
            <Button className="Society-btn" onClick={() => navigate('/societies')}>
              Go to Society Page
            </Button>
            <Button className='Society-btn' onClick={() => navigate('/SocietyForm')}>
              Apply Now
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Contact;
