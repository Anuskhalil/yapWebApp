import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SocietyForm = () => {
  const location = useLocation();
  const { societyName } = location.state || { societyName: '' };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsappNumber: '',
    university: '',
    district: '',
    registeredAtYAP: '',
    motivation: '',
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
        'http://localhost:5000/api/societyRegistration',
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
        setSubmissionStatus({ success: false, message: error.response.data.message });
      } else {
        setSubmissionStatus({ success: false, message: 'Registration failed. Please try again.' });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="society-form max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-36 font-sans">
      <h1 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
        Join {societyName}
      </h1>

      {submissionStatus && (
        <div
          className={`alert p-3 rounded-md mb-5 text-center text-sm font-medium ${submissionStatus.success
              ? 'bg-green-100 text-green-800 border border-green-200'
              : 'bg-red-100 text-red-800 border border-red-200'
            }`}
        >
          {submissionStatus.message}
        </div>
      )}

      {/* Name Input */}
      <div className="form-group mb-5">
        <label htmlFor="name" className="block mb-2 font-medium text-black">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-200 rounded-md text-sm text-black bg-gray-50 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
        />
      </div>

      {/* Email Input */}
      <div className="form-group mb-5">
        <label htmlFor="email" className="block mb-2 font-medium text-black">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-200 rounded-md text-sm text-black bg-gray-50 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
        />
      </div>

      {/* WhatsApp Number Input */}
      <div className="form-group mb-5">
        <label htmlFor="whatsappNumber" className="block mb-2 font-medium text-black">WhatsApp Number</label>
        <input
          type="text"
          id="whatsappNumber"
          name="whatsappNumber"
          value={formData.whatsappNumber}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-200 rounded-md text-sm text-black bg-gray-50 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
        />
      </div>

      {/* University Name Input */}
      <div className="form-group mb-5">
        <label htmlFor="university" className="block mb-2 font-medium text-black">University Name</label>
        <input
          type="text"
          id="university"
          name="university"
          value={formData.university}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-200 rounded-md text-sm text-black bg-gray-50 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
        />
      </div>

      {/* District Input */}
      <div className="form-group mb-5">
        <label htmlFor="district" className="block mb-2 font-medium text-black">District</label>
        <input
          type="text"
          id="district"
          name="district"
          value={formData.district}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-200 rounded-md text-sm text-black bg-gray-50 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
        />
      </div>

      {/* Already Joined at YAP Input */}
      <div className="form-group mb-5">
        <label className="block mb-2 font-medium text-black">Are you already registered at YAP?</label>
        <div className="radio-group flex flex-wrap gap-4 mt-3">
          <label className="flex items-center font-normal text-black cursor-pointer">
            <input
              type="radio"
              name="registeredAtYAP"
              value="yes"
              checked={formData.registeredAtYAP === 'yes'}
              onChange={handleChange}
              className="mr-2 w-4 h-4 cursor-pointer"
            />
            Yes
          </label>
          <label className="flex items-center font-normal text-black cursor-pointer">
            <input
              type="radio"
              name="registeredAtYAP"
              value="no"
              checked={formData.registeredAtYAP === 'no'}
              onChange={handleChange}
              className="mr-2 w-4 h-4 cursor-pointer"
            />
            No
          </label>
        </div>
      </div>

      {/* Motivation Input */}
      <div className="form-group mb-5">
        <label htmlFor="motivation" className="block mb-2 font-medium text-black">
          Why do you want to join {societyName}?
        </label>
        <textarea
          id="motivation"
          name="motivation"
          value={formData.motivation}
          onChange={handleChange}
          rows="4"
          required
          className="w-full p-3 border border-gray-200 rounded-md text-sm text-black bg-gray-50 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all resize-y min-h-[100px]"
        />
      </div>

      <button
        type="submit"
        className="submit-btn w-full bg-[#EDC533] text-[#1D2330] py-3 rounded-md font-bold text-base md:text-lg hover:bg-[#C9A000] hover:shadow-lg hover:scale-105 transition-all active:scale-95 active:shadow-md"
      >
        Submit
      </button>
    </form>
  );
};

export default SocietyForm;