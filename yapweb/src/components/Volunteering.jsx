import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Volunteering.css";

const VolunteeringPage = () => {
  const navigate = useNavigate(); // Get the navigate function

  const handleApplyClick = (domain) => {
    navigate("/VolunteeringRegistration", { state: { selectedDomain: domain } });
  };

  return (
    <div className="volunteering-container">
      {/* Hero Section (No Changes) */}
      <div className="volunteering-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Become a Volunteer</h1>
          <p className="hero-subtitle">
            Join our volunteering program and make a positive impact.
          </p>
        </div>
        <svg className="hero-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fillOpacity="1" d="M0,224L48,197.3C96,171,192,117,288,112C384,107,480,149,576,170.7C672,192,768,192,864,186.7C960,181,1056,171,1152,160C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Volunteering Domains Section (Modified Button) */}
      <div className="domains-section">
        {["Logistics", "Production", "Event Management", "Operation"].map(
          (domain, idx) => (
            <div key={idx} className="domain-card">
              <h3 className="domain-title">{domain}</h3>
              <button
                onClick={() => handleApplyClick(domain)} // Call handleApplyClick
                className="domain-btn"
              >
                Apply Now
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default VolunteeringPage;