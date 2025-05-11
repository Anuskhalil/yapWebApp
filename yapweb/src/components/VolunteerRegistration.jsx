import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const VolunteeringRegistration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedDomain = location.state?.selectedDomain || "";

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
      navigate("/volunteering");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit application. Please try again.");
    }
  };

  return (
    <div className="volunteering-container mt-5">
      <div style={{ paddingTop: "100px" }}></div>
      <div className="popup-content bg-white max-w-xl w-[90%] mx-auto p-6 md:p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl text-[#0d7292] mb-8 text-center">
          Apply for {selectedDomain} Volunteering
        </h1>
        <form className="apply-form flex flex-col gap-5" onSubmit={handleSubmit}>
          <h3 className="text-2xl text-[#0d7292]">Personal Information</h3>
          <div className="form-group flex flex-col">
            <label className="font-bold mb-2">Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              autoFocus
              required
              className="w-full p-3 border border-gray-300 rounded-md text-base focus:border-[#0d7292] focus:ring focus:ring-[#0d7292]/50 focus:outline-none"
            />
          </div>
          <div className="form-group flex flex-col">
            <label className="font-bold mb-2">Email Address:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-base focus:border-[#0d7292] focus:ring focus:ring-[#0d7292]/50 focus:outline-none"
            />
          </div>
          <div className="form-group flex flex-col">
            <label className="font-bold mb-2">Contact Number:</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-base focus:border-[#0d7292] focus:ring focus:ring-[#0d7292]/50 focus:outline-none"
            />
          </div>
          <div className="form-group flex flex-col">
            <label className="font-bold mb-2">Address (optional):</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-base focus:border-[#0d7292] focus:ring focus:ring-[#0d7292]/50 focus:outline-none"
            />
          </div>

          <h3 className="text-2xl text-[#0d7292]">Background</h3>
          <div className="form-group flex flex-col">
            <label className="font-bold mb-2">Are you currently a student or employee?</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-base focus:border-[#0d7292] focus:ring focus:ring-[#0d7292]/50 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="student">Student</option>
              <option value="employed">Employee</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group flex flex-col">
            <label className="font-bold mb-2">Do you have prior volunteering experience?</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-base focus:border-[#0d7292] focus:ring focus:ring-[#0d7292]/50 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-group flex flex-col">
            <label className="font-bold mb-2">Skills & Interests:</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="List your skills"
              required
              className="w-full p-3 border border-gray-300 rounded-md text-base focus:border-[#0d7292] focus:ring focus:ring-[#0d7292]/50 focus:outline-none resize-y"
            ></textarea>
          </div>
          <div className="form-group flex flex-col">
            <label className="font-bold mb-2">Which areas of volunteering interest you most?</label>
            <input
              type="text"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-base focus:border-[#0d7292] focus:ring focus:ring-[#0d7292]/50 focus:outline-none"
            />
          </div>

          <h3 className="text-2xl text-[#0d7292]">Availability</h3>
          <div className="form-group flex flex-col">
            <label className="font-bold mb-2">How many hours can you commit?</label>
            <input
              type="number"
              name="hours"
              value={formData.hours}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-base focus:border-[#0d7292] focus:ring focus:ring-[#0d7292]/50 focus:outline-none"
            />
          </div>
          <div className="form-group flex flex-col">
            <label className="font-bold mb-2">Preferred days/times for volunteering:</label>
            <textarea
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-base focus:border-[#0d7292] focus:ring focus:ring-[#0d7292]/50 focus:outline-none resize-y"
            ></textarea>
          </div>

          <h3 className="text-2xl text-[#0d7292]">Motivation</h3>
          <div className="form-group flex flex-col">
            <label className="font-bold mb-2">Why do you want to volunteer with us?</label>
            <textarea
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-base focus:border-[#0d7292] focus:ring focus:ring-[#0d7292]/50 focus:outline-none resize-y"
            ></textarea>
          </div>
          <div className="form-group flex flex-col">
            <label className="font-bold mb-2">What do you hope to gain from this experience?</label>
            <textarea
              name="expectations"
              value={formData.expectations}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-base focus:border-[#0d7292] focus:ring focus:ring-[#0d7292]/50 focus:outline-none resize-y"
            ></textarea>
          </div>

          <button
            type="submit"
            className="Submit-btn bg-[#0d7292] text-white py-3 px-4 rounded-md text-base font-bold hover:bg-[#095a73] transition-colors"
            id="Submit-btn"
          >
            Submit Application
          </button>
        </form>
        <button
          className="close-btn bg-[#ff4b4b] text-white py-3 px-4 rounded-md mt-5 mx-auto block font-bold hover:bg-[#cc0000] transition-colors"
          onClick={() => navigate("/volunteering")}
        >
          Back to Volunteering
        </button>
      </div>
    </div>
  );
};

export default VolunteeringRegistration;