import React, { useState } from "react";
import "./Volunteering.css";

const volunteeringPage = () => {
  const [applyPopup, setApplyPopup] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState("");

  const openApplyPopup = (domain) => {
    setSelectedDomain(domain);
    setApplyPopup(true);
  };

  const closeApplyPopup = () => {
    setApplyPopup(false);
    setSelectedDomain("");
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
                <label>Address (optional):</label>
                <input type="text" placeholder="Enter your address" />
              </div>

              {/* Background */}
              <h3>Background</h3>
              <div className="form-group">
                <label>Are you currently a student or employee?</label>
                <select required>
                  <option value="">Select</option>
                  <option value="student">Student</option>
                  <option value="employed">Employee</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Do you have prior volunteering experience?</label>
                <select required>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="form-group">
                <label>Briefly describe your previous volunteering experience (if any):</label>
                <textarea placeholder="Describe your experience"></textarea>
              </div>

              {/* Skills & Interests */}
              <h3>Skills & Interests</h3>
              <div className="form-group">
                <label>What skills do you bring to this volunteer role?</label>
                <textarea placeholder="List your skills" required></textarea>
              </div>
              <div className="form-group">
                <label>Which areas of volunteering interest you most?</label>
                <input
                  type="text"
                  placeholder="E.g., event management, community service"
                  required
                />
              </div>

              {/* Availability */}
              <h3>Availability</h3>
              <div className="form-group">
                <label>How many hours can you commit?</label>
                <input
                  type="number"
                  placeholder="Enter number of hours"
                  required
                />
              </div>
              <div className="form-group">
                <label>Preferred days/times for volunteering:</label>
                <textarea placeholder="E.g., weekdays, mornings, evenings"></textarea>
              </div>

              {/* Motivation */}
              <h3>Motivation</h3>
              <div className="form-group">
                <label>Why do you want to volunteer with us?</label>
                <textarea
                  placeholder="Explain your motivation"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label>What do you hope to gain from this experience?</label>
                <textarea placeholder="Describe your expectations" required></textarea>
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
      <div className="volunteering-diagram">
        <div className="internee-branch">
          <span>Logistics</span><br />
          <button onClick={() => openApplyPopup("Logistics")}>Apply</button>
        </div>
        <div className="internee-branch">
          <span>Production</span><br />
          <button onClick={() => openApplyPopup("Production")}>Apply</button>
        </div>
        <div className="internee-branch">
          <span>Event Management</span>
          <button onClick={() => openApplyPopup("Event Management")}>Apply</button>
        </div>
        <div className="internee-branch">
          <span>Operation</span><br />
          <button onClick={() => openApplyPopup("Operation")}>Apply</button>
        </div>
      </div>
    </div>

  );
};

export default volunteeringPage;

