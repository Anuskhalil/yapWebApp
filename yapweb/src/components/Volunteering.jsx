import React, { useState } from "react";
import axios from "axios";
import "./Volunteering.css";

const VolunteeringPage = () => {
  const [applyPopup, setApplyPopup] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    address: "",
    role: "",
    experience: "",
    skills: "",
    interests: "",
    hours: "",
    availability: "",
    motivation: "",
    expectations: "",
  });

  const openApplyPopup = (domain) => {
    setSelectedDomain(domain);
    setApplyPopup(true);
  };

  const closeApplyPopup = () => {
    setApplyPopup(false);
    setSelectedDomain("");
    setFormData({
      fullName: "",
      email: "",
      contactNumber: "",
      address: "",
      role: "",
      experience: "",
      skills: "",
      interests: "",
      hours: "",
      availability: "",
      motivation: "",
      expectations: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/volunteerapply", {
        ...formData,
        domain: selectedDomain,
      });
      alert(response.data.message);
      closeApplyPopup();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit application. Please try again.");
    }
  };

  return (
    <div className="volunteering-container">
      <div className="volunteering-hero">
        <div className="volunteering-overlay">
          <h1 className="volunteering-title">Become a Volunteer</h1>
          <p className="volunteering-description">
            Join our volunteering program and make a positive impact in your community!
          </p>
        </div>
      </div>

      {applyPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h1>Apply for {selectedDomain} Volunteering</h1>
            <form className="apply-form" onSubmit={handleSubmit}>
              <h3>Personal Information</h3>
              <div className="form-group">
                <label>Full Name:</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email Address:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Contact Number:</label>
                <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Address (optional):</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} />
              </div>

              <h3>Background</h3>
              <div className="form-group">
                <label>Are you currently a student or employee?</label>
                <select name="role" value={formData.role} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="student">Student</option>
                  <option value="employed">Employee</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Do you have prior volunteering experience?</label>
                <select name="experience" value={formData.experience} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="form-group">
                <label>Skills & Interests:</label>
                <textarea name="skills" value={formData.skills} onChange={handleChange} placeholder="List your skills" required></textarea>
              </div>
              <div className="form-group">
                <label>Which areas of volunteering interest you most?</label>
                <input type="text" name="interests" value={formData.interests} onChange={handleChange} required />
              </div>

              <h3>Availability</h3>
              <div className="form-group">
                <label>How many hours can you commit?</label>
                <input type="number" name="hours" value={formData.hours} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Preferred days/times for volunteering:</label>
                <textarea name="availability" value={formData.availability} onChange={handleChange}></textarea>
              </div>

              <h3>Motivation</h3>
              <div className="form-group">
                <label>Why do you want to volunteer with us?</label>
                <textarea name="motivation" value={formData.motivation} onChange={handleChange} required></textarea>
              </div>
              <div className="form-group">
                <label>What do you hope to gain from this experience?</label>
                <textarea name="expectations" value={formData.expectations} onChange={handleChange} required></textarea>
              </div>

              <button type="submit" className="submit-btn">Submit Application</button>
            </form>
            <button className="close-btn" onClick={closeApplyPopup}>Close</button>
          </div>
        </div>
      )}

      <div className="volunteering-diagram">
        {["Logistics", "Production", "Event Management", "Operation"].map((domain) => (
          <div key={domain} className="internee-branch">
            <span>{domain}</span><br />
            <button onClick={() => openApplyPopup(domain)}>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteeringPage;
