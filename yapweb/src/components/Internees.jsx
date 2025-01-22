import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Internees.css";

const InterneesPage = () => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [applyPopup, setApplyPopup] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState("");

  // Show "Available Internships" popup based on navigation state
  useEffect(() => {
    if (location.state?.showPopup) {
      setShowPopup(true);
    }
  }, [location.state]);

  // Handlers for popups
  const closePopup = () => setShowPopup(false);

  const openApplyPopup = (domain) => {
    setSelectedDomain(domain);
    setApplyPopup(true);
  };

  const closeApplyPopup = () => {
    setApplyPopup(false);
    setSelectedDomain("");
  };

  return (
    <div className="internees-container">
      <div className="internees-hero">
        <div className="internees-overlay">
          <h1 className="internees-title">Join Our Internships Program</h1>
          <p className="internees-description">
          Join us in creating innovative solutions. Explore your potential with
          our internships.
        </p>
        </div>
      </div>      {/* Available Internships Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h1>Available Internships</h1>
            <h4>Apply as per your domain</h4>
            <ul>
              <li>Content Writing</li>
              <li>Marketing</li>
              <li>Data Management</li>
              <li>Human Resources</li>
              <li>Production</li>
              <li>Event Management</li>
              <li>Data Management</li>
              <li>Information Technology</li>
            </ul>
            <button className="close-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Apply Form Popup */}
      {applyPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h1>Apply for {selectedDomain} Internship</h1>
            <form className="apply-form">
              {/* Personal Information */}
              <h3>Personal Information</h3>
              <div className="form-group">
                <label>Full Name:</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label>Email Address:</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="form-group">
                <label>Contact Number:</label>
                <input
                  type="tel"
                  placeholder="Enter your contact number"
                  required
                />
              </div>
              <div className="form-group">
                <label>LinkedIn Profile (optional):</label>
                <input type="url" placeholder="Enter LinkedIn URL" />
              </div>

              {/* Education */}
              <h3>Education</h3>
              <div className="form-group">
                <label>Current Degree Program:</label>
                <input
                  type="text"
                  placeholder="E.g., BSc Computer Science"
                  required
                />
              </div>
              <div className="form-group">
                <label>University Name:</label>
                <input type="text" placeholder="Enter your university name" required />
              </div>
              <div className="form-group">
                <label>Year of Study:</label>
                <input type="text" placeholder="E.g., 3rd Year" required />
              </div>
              <div className="form-group">
                <label>Expected Graduation Date:</label>
                <input type="date" required />
              </div>

              {/* Experience */}
              <h3>Experience</h3>
              <div className="form-group">
                <label>Have you had any prior internships?</label>
                <select required>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="form-group">
                <label>Briefly describe relevant experience (if any):</label>
                <textarea placeholder="Describe your experience"></textarea>
              </div>

              {/* Preferences */}
              <h3>Preferences</h3>
              <div className="form-group">
                <label>Availability:</label>
                <select required>
                  <option value="">Select</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                </select>
              </div>

              {/* Motivation */}
              <h3>Motivation</h3>
              <div className="form-group">
                <label>Why do you want this internship?</label>
                <textarea
                  placeholder="Explain your motivation"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label>What are your career goals?</label>
                <textarea placeholder="Describe your career goals" required></textarea>
              </div>

              {/* Portfolio/References */}
              <h3>Portfolio/References</h3>
              <div className="form-group">
                <label>Share your portfolio (optional):</label>
                <input type="url" placeholder="Enter portfolio link" />
              </div>
              <div className="form-group">
                <label>Provide one professional reference (optional):</label>
                <input type="text" placeholder="Enter reference details" />
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-btn">
                Submit Application
              </button>
            </form>
            <button className="close-btn" onClick={closeApplyPopup}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Internship Domains with Apply Buttons */}
      <div className="internees-diagram">
        <div className="internee-branch">
          <span>Content Writing</span>
          <button onClick={() => openApplyPopup("Content Writing")}>Apply</button>
        </div>
        <div className="internee-branch">
          <span>Social Media Marketing</span>
          <button onClick={() => openApplyPopup("Marketing")}>Apply</button>
        </div>
        <div className="internee-branch">
          <span>Data Management</span>
          <button onClick={() => openApplyPopup("Data Management")}>Apply</button>
        </div>
        <div className="internee-branch">
          <span>Human Resources</span>
          <button onClick={() => openApplyPopup("Human Resources")}>Apply</button>
        </div>
        <div className="internee-branch">
          <span>Information Technology</span>
          <button onClick={() => openApplyPopup("Information Technology")}>Apply</button>
        </div>
        <div className="internee-branch">
          <span>Event Management</span>
          <button onClick={() => openApplyPopup("Event Management")}>Apply</button>
        </div>
        <div className="internee-branch">
          <span>Production</span><br />
          <button onClick={() => openApplyPopup("Production")}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default InterneesPage;

