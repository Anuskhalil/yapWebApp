import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import axios from "axios";
import './RegistrationForm.css';

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    email: "",
    phoneNumber: "",
    address: "",
    inSociety: "", // "Yes" or "No"
    society: "", // Society name (optional)
  });

  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "radio") {
      // Handle Yes/No radio buttons
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/register/student', formData);

      setModalMessage(response.data.message); // Show success message
      setShowModal(true); // Open success modal

      // Reset the form fields after successful submission
      setFormData({
        fullName: "",
        fatherName: "",
        email: "",
        phoneNumber: "",
        address: "",
        inSociety: "", // Reset radio button
        society: "",   // Reset society selection
      });

    } catch (err) {
      if (err.response) {
        console.error('Response error:', err.response.data);
        setModalMessage(err.response.data.message);
      } else if (err.request) {
        console.error('Request error:', err.request);
        setModalMessage("No response from the server. Please check your connection.");
      } else {
        console.error('Unexpected error:', err.message);
        setModalMessage("Unexpected error. Please try again.");
      }
      setShowModal(true);
    }
  };



  const closeModal = () => setShowModal(false);

  return (
    <div className="form-container">
      <h2 className="form-title">ACP Youth Ambassador Programme</h2>
      <p className="form-subtitle">
        Access to ACP Facilities | Collaborations | Volunteer & Internship
        Initiatives | Performances In International Festivals | Networking
        Opportunities
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formFatherName">
          <Form.Label>Father's Name</Form.Label>
          <Form.Control
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            placeholder="Enter father's name"
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
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
            required
          />
        </Form.Group>

        <Form.Group controlId="formInSociety">
          <Form.Label>Are you in any society?</Form.Label>
          <div>
            <Form.Check
              type="radio"
              label="Yes"
              name="inSociety"
              value="Yes"
              checked={formData.inSociety === "Yes"}
              onChange={handleChange}
            />
            <Form.Check
              type="radio"
              label="No"
              name="inSociety"
              value="No"
              checked={formData.inSociety === "No"}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <Form.Group controlId="formSociety">
          <Form.Label>Choose Society</Form.Label>
          <Form.Control
            as="select"
            name="society"
            value={formData.society}
            onChange={handleChange}
          >
            <option value="">Select a society (optional)</option>
            <option value="Dramatic Society">Dramatic Society</option>
            <option value="Alliance Society">Alliance Society</option>
            <option value="Buzz Society">Buzz Society</option>
            <option value="Tech Society">Tech Society</option>
            <option value="Music Society">Music Society</option>
            <option value="Sports Society">Sports Society</option>
            <option value="Literature Society">Literature Society</option>
            <option value="Media Society">Media Society</option>
            <option value="Cultural Society">Cultural Society</option>
            <option value="Art Society">Art Society</option>
            <option value="Environmental Society">Environmental Society</option>
            <option value="Debate Society">Debate Society</option>
            <option value="AI Society">AI Society</option>
            <option value="Health Society">Health Society</option>
            <option value="Entrepreneur Society">Entrepreneur Society</option>
            <option value="Volunteer Society">Volunteer Society</option>
          </Form.Control>
        </Form.Group>

        <Button className="mt-3 fw-bold hero-button" type="submit">
          Register
        </Button>
      </Form>

      {/* Modal Popup for Success/Error */}
      <Modal show={showModal} onHide={closeModal} className="registration-modal">
        <Modal.Header closeButton>
          <Modal.Title>Form Submission</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StudentRegistrationForm;