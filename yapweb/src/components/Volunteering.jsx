import React from "react";
import { useNavigate } from "react-router-dom";

const VolunteeringPage = () => {
  const navigate = useNavigate();

  const handleApplyClick = (domain) => {
    navigate("/VolunteeringRegistration", { state: { selectedDomain: domain } });
  };

  return (
    <div className="volunteering-container overflow-x-hidden">
      {/* Hero Section */}
      <div className="volunteering-hero relative h-[80vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('../images/MeetUp/meetupimg34.jpg')" }}>
        <div className="hero-overlay absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-black/70 flex flex-col items-center justify-center p-5 text-center">
          <h1 className="hero-title text-5xl md:text-6xl text-white uppercase tracking-wide">
            Become a Volunteer
          </h1>
          <p className="hero-subtitle text-2xl md:text-3xl text-gray-200 mt-4">
            Join our volunteering program and make a positive impact.
          </p>
        </div>
        <svg className="hero-wave absolute bottom-0 left-0 w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fillOpacity="1" d="M0,224L48,197.3C96,171,192,117,288,112C384,107,480,149,576,170.7C672,192,768,192,864,186.7C960,181,1056,171,1152,160C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Volunteering Domains Section */}
      <div className="domains-section py-10 px-5 bg-white">
        {["Logistics", "Production", "Event Management", "Operation"].map(
          (domain, idx) => (
            <div key={idx} className="domain-card bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] p-5 text-center transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] w-64">
              <h3 className="domain-title text-xl font-medium uppercase tracking-wide text-[#0d7292] mb-4">
                {domain}
              </h3>
              <button
                onClick={() => handleApplyClick(domain)}
                className="domain-btn bg-[#0d7292] text-white px-5 py-2 rounded-full text-base transition-all duration-300 hover:bg-[#095a73] hover:scale-105"
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