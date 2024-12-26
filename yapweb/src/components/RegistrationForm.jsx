import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import './RegistrationForm.css'
import axios from "axios";

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    cnic: "",
    email: "",
    studentId: "",
    subjectOfStudy: "",
    yearOfStudy: "",
    cellNumber1: "",
    cellNumber2: "",
    instituteName: "",
    residentialAddress: "",
    district: "",
    fieldOfInterest: [],
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const interests = prev.fieldOfInterest;
        if (checked) {
          return { ...prev, fieldOfInterest: [...interests, value] };
        } else {
          return { ...prev, fieldOfInterest: interests.filter((item) => item !== value) };
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData2 = {
      fullName: formData.fullName,
      fatherName: formData.fatherName,
      cnic: formData.cnic,
      email: formData.email,
      studentId: formData.studentId,
      subjectOfStudy: formData.subjectOfStudy,
      yearOfStudy: formData.yearOfStudy,
      cellNumber1: formData.cellNumber1,
      cellNumber2: formData.cellNumber2,
      instituteName: formData.instituteName,
      residentialAddress: formData.residentialAddress,
      district: formData.district,
      fieldOfInterest: formData.fieldOfInterest,
    };

    try {
      const response = await axios.post("http://localhost:4000/register", formData2);
      console.log(response)
      setModalMessage("Registration successful!");
      setShowModal(true);
      // Reset form data after submission
      setFormData({
        fullName: "",
        fatherName: "",
        cnic: "",
        email: "",
        studentId: "",
        subjectOfStudy: "",
        yearOfStudy: "",
        cellNumber1: "",
        cellNumber2: "",
        instituteName: "",
        residentialAddress: "",
        district: "",
        fieldOfInterest: [],
      });
    } catch (error) {
      setModalMessage("Error submitting the form. Please try again.");
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

        <Form.Group controlId="formCnic">
          <Form.Label>CNIC</Form.Label>
          <Form.Control
            type="text"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            placeholder="Enter CNIC"
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

        <Form.Group controlId="formStudentId">
          <Form.Label>Student ID</Form.Label>
          <Form.Control
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            placeholder="Enter student ID"
            required
          />
        </Form.Group>

        <Form.Group controlId="formSubjectOfStudy">
          <Form.Label>Subject of Study</Form.Label>
          <Form.Control
            type="text"
            name="subjectOfStudy"
            value={formData.subjectOfStudy}
            onChange={handleChange}
            placeholder="Enter subject of study"
            required
          />
        </Form.Group>

        <Form.Group controlId="formYearOfStudy">
          <Form.Label>Year of Study</Form.Label>
          <Form.Control
            type="text"
            name="yearOfStudy"
            value={formData.yearOfStudy}
            onChange={handleChange}
            placeholder="Enter year of study"
            required
          />
        </Form.Group>

        <Form.Group controlId="formCellNumber1">
          <Form.Label>Cell Number 1</Form.Label>
          <Form.Control
            type="text"
            name="cellNumber1"
            value={formData.cellNumber1}
            onChange={handleChange}
            placeholder="Enter cell number 1"
            required
          />
        </Form.Group>

        <Form.Group controlId="formCellNumber2">
          <Form.Label>Cell Number 2</Form.Label>
          <Form.Control
            type="text"
            name="cellNumber2"
            value={formData.cellNumber2}
            onChange={handleChange}
            placeholder="Enter cell number 2 (optional)"
          />
        </Form.Group>

        <Form.Group controlId="formInstituteName">
          <Form.Label>Institute Name</Form.Label>
          <Form.Control
            type="text"
            name="instituteName"
            value={formData.instituteName}
            onChange={handleChange}
            placeholder="Enter institute name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formResidentialAddress">
          <Form.Label>Residential Address</Form.Label>
          <Form.Control
            type="text"
            name="residentialAddress"
            value={formData.residentialAddress}
            onChange={handleChange}
            placeholder="Enter residential address"
            required
          />
        </Form.Group>

        <Form.Group controlId="formDistrict">
          <Form.Label>District</Form.Label>
          <Form.Control
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            placeholder="Enter district"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Field of Interest</Form.Label>
          <div>
            <Form.Check
              type="checkbox"
              label="AI"
              name="fieldOfInterest"
              value="AI"
              onChange={handleChange}
              checked={formData.fieldOfInterest.includes("AI")}
            />
            <Form.Check
              type="checkbox"
              label="Web Development"
              name="fieldOfInterest"
              value="Web Development"
              onChange={handleChange}
              checked={formData.fieldOfInterest.includes("Web Development")}
            />
          </div>
        </Form.Group>
        <Button className="mt-3 fw-bold hero-button" type="submit">
          Register
        </Button>
      </Form>

      {/* Modal Popup for Success/Error */}
      <Modal show={showModal} onHide={closeModal}>
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
