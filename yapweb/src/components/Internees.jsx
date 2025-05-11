import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
    <div className="internees-container overflow-x-hidden">
      {/* Hero Section */}
      <div className="internees-hero relative w-full h-[80vh] bg-[url('../images/MeetUp/meetupimg26.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="hero-overlay absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/70 via-black/30 to-black/70 flex flex-col items-center justify-center p-5 text-center">
          <h1 className="hero-title text-5xl md:text-6xl text-white uppercase tracking-wide">
            Innovate. Inspire. Intern.
          </h1>
          <p className="hero-subtitle text-2xl md:text-3xl text-gray-200 mt-4">
            Discover your potential with immersive internship experiences.
          </p>
        </div>
        {/* Decorative Wave */}
        <svg
          className="hero-wave absolute bottom-0 left-0 w-full h-auto"
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
      <div className="domains-section py-16 px-5 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {[
            "Content Writing",
            "Digital Marketing",
            "Data Analytics",
            "Human Resources",
            "IT Solutions",
            "Event Management",
            "Creative Production",
          ].map((domain, idx) => (
            <div key={idx} className="domain-card bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] p-6 text-center transition-all duration-300 hover:translate-y-[-10px] hover:shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]">
              <h3 className="domain-title text-xl font-semibold text-[#0d7292] uppercase tracking-wide mb-4">
                {domain}
              </h3>
              <button
                onClick={() => openApplyPopup(domain)}
                className="domain-btn bg-[#0d7292] text-white px-6 py-2 rounded-full hover:bg-[#095a73] hover:scale-105 transition-all"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Available Internships Popup */}
      {showPopup && (
        <div className="popup-container fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-[1000]">
          <div className="popup-box bg-white/80 backdrop-blur-lg rounded-2xl p-6 max-w-md text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl text-[#0d7292] mb-5">Available Internships</h2>
            <ul className="list-none p-0 mb-5">
              {[
                "Content Writing",
                "Digital Marketing",
                "Data Analytics",
                "Human Resources",
                "IT Solutions",
                "Event Management",
                "Creative Production",
              ].map((domain, i) => (
                <li key={i} className="text-lg mb-2">{domain}</li>
              ))}
            </ul>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Apply Form Popup */}
      {applyPopup && (
        <div className="popup-container fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-[1000]">
          <div className="popup-box form-popup bg-white/80 backdrop-blur-lg rounded-2xl p-6 max-w-md text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl text-[#0d7292] mb-5">Apply for {selectedDomain} Internship</h2>
            <form className="apply-form flex flex-col gap-4 text-left">
              <div className="form-group">
                <label className="block text-gray-700 font-semibold text-sm">Full Name</label>
                <input type="text" placeholder="Enter your full name" required className="w-full p-2 rounded-lg border border-gray-300" />
              </div>
              <div className="form-group">
                <label className="block text-gray-700 font-semibold text-sm">Email</label>
                <input type="email" placeholder="Enter your email" required className="w-full p-2 rounded-lg border border-gray-300" />
              </div>
              <div className="form-group">
                <label className="block text-gray-700 font-semibold text-sm">Contact Number</label>
                <input type="tel" placeholder="Enter your contact number" required className="w-full p-2 rounded-lg border border-gray-300" />
              </div>
              <div className="form-group">
                <label className="block text-gray-700 font-semibold text-sm">LinkedIn Profile (Optional)</label>
                <input type="url" placeholder="Enter your LinkedIn URL" className="w-full p-2 rounded-lg border border-gray-300" />
              </div>
              <button
                className="submit-btn bg-[#0d7292] text-white px-6 py-3 rounded-full hover:bg-[#095a73] hover:scale-102 transition-all mt-4"
              >
                Submit Application
              </button>
            </form>
            <button
              onClick={() => setApplyPopup(false)}
              className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors mt-4"
              id="close-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterneesPage;