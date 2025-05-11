import React, { useState } from "react";
import axios from "axios";

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    email: "",
    phoneNumber: "",
    address: "",
    inSociety: "",
    society: "",
  });

  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "radio") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/register/student', formData);

      setModalMessage(response.data.message);
      setShowModal(true);

      setFormData({
        fullName: "",
        fatherName: "",
        email: "",
        phoneNumber: "",
        address: "",
        inSociety: "",
        society: "",
      });

    } catch (err) {
      if (err.response) {
        console.error('Response error:', err.response.data);
        setModalMessage(err.response.data.message);
      } else if (err.request) {
        console.error('Request error:', err.request);
        setModalMessage("No response from the server. Please check your connection.");
      } else {
        console.error('Unexpected error:', err.message);
        setModalMessage("Unexpected error. Please try again.");
      }
      setShowModal(true);
    }
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="form-container mx-8 mt-36 p-5 border border-gray-300 rounded-lg bg-gray-50">
      <h2 className="form-title text-center font-bold text-2xl md:text-3xl mb-4">
        ACP Youth Ambassador Programme
      </h2>
      <p className="form-subtitle text-center text-sm md:text-base text-gray-600 mb-6">
        Access to ACP Facilities | Collaborations | Volunteer & Internship
        Initiatives | Performances In International Festivals | Networking
        Opportunities
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-bold text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            required
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
          />
        </div>

        <div>
          <label className="block font-bold text-gray-700">Father's Name</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            placeholder="Enter father's name"
            required
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
          />
        </div>

        <div>
          <label className="block font-bold text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
          />
        </div>

        <div>
          <label className="block font-bold text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
          />
        </div>

        <div>
          <label className="block font-bold text-gray-700">Address</label>
          <textarea
            rows={3}
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
            required
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
          />
        </div>

        <div>
          <label className="block font-bold text-gray-700">Are you in any society?</label>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="inSociety"
                value="Yes"
                checked={formData.inSociety === "Yes"}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="inSociety"
                value="No"
                checked={formData.inSociety === "No"}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        <div>
          <label className="block font-bold text-gray-700">Choose Society</label>
          <select
            name="society"
            value={formData.society}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a society (optional)</option>
            <option value="Dramatic Society">Dramatic Society</option>
            <option value="Alliance Society">Alliance Society</option>
            <option value="Buzz Society">Buzz Society</option>
            <option value="Tech Society">Tech Society</option>
            <option value="Music Society">Music Society</option>
            <option value="Sports Society">Sports Society</option>
            <option value="Literature Society">Literature Society</option>
            <option value="Media Society">Media Society</option>
            <option value="Cultural Society">Cultural Society</option>
            <option value="Art Society">Art Society</option>
            <option value="Environmental Society">Environmental Society</option>
            <option value="Debate Society">Debate Society</option>
            <option value="AI Society">AI Society</option>
            <option value="Health Society">Health Society</option>
            <option value="Entrepreneur Society">Entrepreneur Society</option>
            <option value="Volunteer Society">Volunteer Society</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md font-bold hover:bg-blue-700 transition-colors"
        >
          Register
        </button>
      </form>

      {/* Modal Popup for Success/Error */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]">
          <div className="bg-[#2a2222] text-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Form Submission</h3>
              <button onClick={closeModal} className="text-white text-2xl">&times;</button>
            </div>
            <p className="mb-6">{modalMessage}</p>
            <button
              onClick={closeModal}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentRegistrationForm;