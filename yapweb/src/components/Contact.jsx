import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons
import { motion } from 'framer-motion'; // Import Framer Motion
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: '',
    contactMethod: 'email',
  });

  const [status, setStatus] = useState({ success: false, error: false });
  const [showContactModal, setShowContactModal] = useState(false);
  const [showSocietyModal, setShowSocietyModal] = useState(false);
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
      const response = await fetch('http://localhost:4000/contactForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setModalMessage('Your Contact form has been submitted successfully! You will be notified soon.');
        setStatus({ success: true, error: false });
        setShowContactModal(true);
        setFormData({
          name: '',
          email: '',
          message: '',
          interest: '',
          contactMethod: 'email',
        });
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setModalMessage('There was an error submitting your registration. Please try again later.');
      setStatus({ success: false, error: true });
      setShowContactModal(true);
    }
  };

  // Framer Motion Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Stagger the animation of children
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };


  return (
    <Container id="contact" className="py-5 mt-5">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>

        <Row>
          <Col lg={5} className="mb-5 mb-lg-0 mt-5">
            <motion.div variants={fadeIn}>
              <h2 className="contact-title mb-4">Get in Touch</h2>
              <p className="contact-description mb-4">
                We're here to help and answer any questions you might have.  We look forward to hearing from you!
              </p>
              <div className="contact-info mb-4">
                <h4 className='contact-info-title'>Contact Information</h4>
                <p>
                  <FaMapMarkerAlt className="contact-icon" /> Arts Council of Pakistan, Karachi
                </p>
                <p>
                  <FaPhone className="contact-icon" /> +92 (21) 3867000
                </p>
                <p>
                  <FaEnvelope className="contact-icon" /> info@artscouncil.org.pk
                </p>
              </div>

              <div className="contact-buttons mt-4">
                <h3 className='contact-button-title'>Join Us</h3>
                <Button
                  // variant="primary"
                  className="contact-button fw-bold me-2"
                  onClick={() => navigate("/internees", { state: { showPopup: true } })}
                >
                  Internships
                </Button>
                <Button
                  // variant="outline-primary"
                  className="contact-button fw-bold"
                  onClick={() => setShowSocietyModal(true)}
                >
                  Societies
                </Button>
              </div>
            </motion.div>
          </Col>


          <Col lg={7}>
            <motion.div variants={fadeIn}>
              <div className="contact-form-wrapper">
                {status.success && <Alert variant="success">Message sent successfully!</Alert>}
                {status.error && <Alert variant="danger">An error occurred. Please try again.</Alert>}
                <Form onSubmit={handleSubmit} as={motion.form} variants={containerVariants} initial="hidden" animate="visible">
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formName" className="mb-3" as={motion.div} variants={itemVariants}>
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="formEmail" className="mb-3" as={motion.div} variants={itemVariants}>
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="formMessage" className="mb-3" as={motion.div} variants={itemVariants}>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Enter your message"
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>

                  <Form.Group controlId="formInterest" className="mb-3" as={motion.div} variants={itemVariants}>
                    <Form.Label>Interested in joining YAP?</Form.Label><br />
                    <Form.Check
                      inline
                      type="radio"
                      id="interest-yes"
                      name="interest"
                      value="Yes"
                      label="Yes"
                      checked={formData.interest === 'Yes'}
                      onChange={handleChange}
                      className='form-check-custom'
                    />
                    <Form.Check
                      inline
                      type="radio"
                      id="interest-no"
                      name="interest"
                      value="No"
                      label="No"
                      checked={formData.interest === 'No'}
                      onChange={handleChange}
                      className='form-check-custom'
                    />
                  </Form.Group>

                  <Form.Group controlId="formContactMethod" className="mb-4" as={motion.div} variants={itemVariants}>
                    <Form.Label>Preferred Contact Method</Form.Label>
                    <Form.Select
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleChange}
                      className="form-control-custom"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                    </Form.Select>
                  </Form.Group>

                  <motion.div variants={itemVariants}>
                    <Button type="submit" className="contact-submit-button py-3 fw-bold">
                      Send Message
                    </Button>
                  </motion.div>
                </Form>
              </div>
            </motion.div>
          </Col>
        </Row>
      </motion.div>


      {/* Modal for Contact Form Feedback */}
      <Modal show={showContactModal} onHide={() => setShowContactModal(false)} centered className="contact-modal">
        <Modal.Header closeButton className='contact-modal-header'>
          <Modal.Title>Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className="contact-modal-body">{modalMessage}</Modal.Body>
        <Modal.Footer className='contact-modal-footer'>
          <Button variant="secondary" onClick={() => setShowContactModal(false)} className='contact-modal-button'>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Society Registration */}
      <Modal show={showSocietyModal} onHide={() => setShowSocietyModal(false)} centered className="society-modal">
        <Modal.Header closeButton className='society-modal-header'>
          <Modal.Title>Society Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body className='society-modal-body'>
          <p>
            Before registering, please check out all the societies on our Society Page. If you've already checked, you can proceed to apply.
          </p>
          <div className="society-modal-buttons">
            <Button onClick={() => navigate('/societies')} className="society-modal-button me-2 fw-bold py-3">
              Go to Society Page
            </Button>
            <Button onClick={() => navigate('/SocietyForm')} className="society-modal-button fw-bold py-3">
              Apply Now
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Contact;