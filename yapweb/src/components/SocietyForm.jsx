import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './SocietyForm.css'; // Add styles similar to your provided design

const SocietyForm = () => {
  const location = useLocation();
  const { societyName } = location.state || { societyName: '' }; // Retrieve society name from state

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsappNumber: '',
    university: '',
    district: '',
    registeredAtYAP: '',
    motivation: '', // Why you want to join the society
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5000/api/societyRegistration', // Replace with your backend URL
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.success) {
        setSubmissionStatus({ success: true, message: 'Registration successful!' });
      } else {
        setSubmissionStatus({ success: false, message: response.data.message });
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Email already exists
        setSubmissionStatus({ success: false, message: error.response.data.message });
      } else {
        setSubmissionStatus({ success: false, message: 'Registration failed. Please try again.' });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="society-form">
      <h1>Join {societyName}</h1> {/* Display the society name in the heading */}

      {submissionStatus && (
        <div
          className={`alert ${submissionStatus.success ? 'alert-success' : 'alert-danger'}`}
        >
          {submissionStatus.message}
        </div>
      )}

      {/* Name Input */}
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* Email Input */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* WhatsApp Number Input */}
      <div className="form-group">
        <label htmlFor="whatsappNumber">WhatsApp Number</label>
        <input
          type="text"
          id="whatsappNumber"
          name="whatsappNumber"
          value={formData.whatsappNumber}
          onChange={handleChange}
          required
        />
      </div>

      {/* University Name Input */}
      <div className="form-group">
        <label htmlFor="university">University Name</label>
        <input
          type="text"
          id="university"
          name="university"
          value={formData.university}
          onChange={handleChange}
          required
        />
      </div>

      {/* District Input */}
      <div className="form-group">
        <label htmlFor="district">District</label>
        <input
          type="text"
          id="district"
          name="district"
          value={formData.district}
          onChange={handleChange}
          required
        />
      </div>

      {/* Already Joined at YAP Input */}
      <div className="form-group">
        <label>Are you already registered at YAP?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="registeredAtYAP"
              value="yes"
              checked={formData.registeredAtYAP === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="registeredAtYAP"
              value="no"
              checked={formData.registeredAtYAP === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      {/* Motivation Input */}
      <div className="form-group">
        <label htmlFor="motivation">Why do you want to join {societyName}?</label><br />
        <textarea
          id="motivation"
          name="motivation"
          value={formData.motivation}
          onChange={handleChange}
          rows="4"
          required
        />
      </div>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default SocietyForm;