import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Internees.css";

const InterneesPage = () => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [applyPopup, setApplyPopup] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState("");

  useEffect(() => {
    if (location.state?.showPopup) {
      setShowPopup(true);
    }
  }, [location.state]);

  const openApplyPopup = (domain) => {
    setSelectedDomain(domain);
    setApplyPopup(true);
  };

  return (
    <div className="internees-container">
      {/* Hero Section */}
      <div className="internees-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Innovate. Inspire. Intern.</h1>
          <p className="hero-subtitle">
            Discover your potential with immersive internship experiences.
          </p>
        </div>
        {/* Decorative Wave */}
        <svg
          className="hero-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,224L48,197.3C96,171,192,117,288,112C384,107,480,149,576,170.7C672,192,768,192,864,186.7C960,181,1056,171,1152,160C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Internship Domains Section */}
      <div className="domains-section">
        {[
          "Content Writing",
          "Digital Marketing",
          "Data Analytics",
          "Human Resources",
          "IT Solutions",
          "Event Management",
          "Creative Production",
        ].map((domain, idx) => (
          <div key={idx} className="domain-card">
            <h3 className="domain-title">{domain}</h3>
            <button onClick={() => openApplyPopup(domain)} className="domain-btn">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Available Internships Popup */}
      {showPopup && (
        <div className="popup-container ">
          <div className="popup-box">
            <h2>Available Internships</h2>
            <ul>
              {[
                "Content Writing",
                "Digital Marketing",
                "Data Analytics",
                "Human Resources",
                "IT Solutions",
                "Event Management",
                "Creative Production",
              ].map((domain, i) => (
                <li key={i}>{domain}</li>
              ))}
            </ul>
            <button onClick={() => setShowPopup(false)} className="popup-close">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Apply Form Popup */}
      {applyPopup && (
        <div className="popup-container mt-5 py-5">
          <div className="popup-box form-popup">
            <h2>Apply for {selectedDomain} Internship</h2>
            <form className="apply-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input type="tel" placeholder="Enter your contact number" required />
              </div>
              <div className="form-group">
                <label>LinkedIn Profile (Optional)</label>
                <input type="url" placeholder="Enter your LinkedIn URL" />
              </div>
              <Button className="Submit-btn fw-bold">
                Submit Application
              </Button>
            </form>
            <Button onClick={() => setApplyPopup(false)} className="popup-close" id="close-btn">
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterneesPage;
