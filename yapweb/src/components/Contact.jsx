import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: '',
    contactMethod: 'email',
  });

  const [status, setStatus] = useState({ success: false, error: false });
  const [showContactModal, setShowContactModal] = useState(false);
  const [showSocietyModal, setShowSocietyModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/contactForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setModalMessage('Your Contact form has been submitted successfully! You will be notified soon.');
        setStatus({ success: true, error: false });
        setShowContactModal(true);
        setFormData({
          name: '',
          email: '',
          message: '',
          interest: '',
          contactMethod: 'email',
        });
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setModalMessage('There was an error submitting your registration. Please try again later.');
      setStatus({ success: false, error: true });
      setShowContactModal(true);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <div id="contact" className="max-w-7xl mx-auto py-6 sm:py-8 px-6 sm:px-6 lg:px-8">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="lg:w-5/12 mb-8 lg:mb-0 mt-15">
            <motion.div variants={fadeIn}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0D7292] to-[#0A5C75] bg-clip-text text-transparent mb-6">
                Get in Touch
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed mb-6">
                We're here to help and answer any questions you might have. We look forward to hearing from you!
              </p>
              <div className="contact-info mb-6 text-[#0D7292]">
                <h4 className="text-lg sm:text-xl font-semibold mb-4 text-center sm:text-left">Contact Information</h4>
                <p className="text-gray-800 text-sm sm:text-base flex items-center mb-3">
                  <FaMapMarkerAlt className="mr-3 text-lg hover:text-[#0A5C75] transition-colors" aria-hidden="true" />
                  Arts Council of Pakistan, Karachi
                </p>
                <p className="text-gray-800 text-sm sm:text-base flex items-center mb-3">
                  <FaPhone className="mr-3 text-lg hover:text-[#0A5C75] transition-colors" aria-hidden="true" />
                  +92 (21) 3867000
                </p>
                <p className="text-gray-800 text-sm sm:text-base flex items-center">
                  <FaEnvelope className="mr-3 text-lg hover:text-[#0A5C75] transition-colors" aria-hidden="true" />
                  info@artscouncil.org.pk
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center sm:text-left">Join Us</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-gradient-to-r from-[#0D7292] to-[#0A5C75] text-white font-semibold px-4 sm:px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    onClick={() => navigate('/internees', { state: { showPopup: true } })}
                    aria-label="Apply for Internships"
                  >
                    Internships
                  </motion.button>
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-gradient-to-r from-[#0D7292] to-[#0A5C75] text-white font-semibold px-4 sm:px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    onClick={() => setShowSocietyModal(true)}
                    aria-label="Join Societies"
                  >
                    Societies
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-7/12">
            <motion.div variants={fadeIn}>
              <div className="contact-form-wrapper bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                {status.success && (
                  <div className="bg-gradient-to-r from-green-100 to-green-50 text-green-800 p-4 rounded-lg mb-4 text-sm sm:text-base">
                    Message sent successfully!
                  </div>
                )}
                {status.error && (
                  <div className="bg-gradient-to-r from-red-100 to-red-50 text-red-800 p-4 rounded-lg mb-4 text-sm sm:text-base">
                    An error occurred. Please try again.
                  </div>
                )}
                <motion.form onSubmit={handleSubmit} variants={containerVariants} initial="hidden" animate="visible">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <motion.div variants={itemVariants}>
                      <label htmlFor="formName" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="formName"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-[#0D7292] focus:ring-2 focus:ring-[#0D7292]/20 outline-none transition-all duration-300 text-sm sm:text-base"
                        aria-describedby="name-error"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label htmlFor="formEmail" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="formEmail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-[#0D7292] focus:ring-2 focus:ring-[#0D7292]/20 outline-none transition-all duration-300 text-sm sm:text-base"
                        aria-describedby="email-error"
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants} className="mt-4 sm:mt-6">
                    <label htmlFor="formMessage" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                      Your Message
                    </label>
                    <textarea
                      id="formMessage"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Enter your message"
                      required
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-[#0D7292] focus:ring-2 focus:ring-[#0D7292]/20 outline-none transition-all duration-300 text-sm sm:text-base"
                      aria-describedby="message-error"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="mt-4 sm:mt-6">
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                      Interested in joining YAP?
                    </label>
                    <div className="flex gap-4 sm:gap-6">
                      <label className="flex items-center text-sm sm:text-base">
                        <input
                          type="radio"
                          id="interest-yes"
                          name="interest"
                          value="Yes"
                          checked={formData.interest === 'Yes'}
                          onChange={handleChange}
                          className="mr-2 focus:ring-[#0D7292] text-[#0D7292]"
                          aria-label="Yes, interested in joining YAP"
                        />
                        Yes
                      </label>
                      <label className="flex items-center text-sm sm:text-base">
                        <input
                          type="radio"
                          id="interest-no"
                          name="interest"
                          value="No"
                          checked={formData.interest === 'No'}
                          onChange={handleChange}
                          className="mr-2 focus:ring-[#0D7292] text-[#0D7292]"
                          aria-label="No, not interested in joining YAP"
                        />
                        No
                      </label>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mt-4 sm:mt-6">
                    <label htmlFor="formContactMethod" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                      Preferred Contact Method
                    </label>
                    <select
                      id="formContactMethod"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-[#0D7292] focus:ring-2 focus:ring-[#0D7292]/20 outline-none transition-all duration-300 text-sm sm:text-base"
                      aria-label="Select preferred contact method"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                    </select>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mt-6 sm:mt-8">
                    <motion.button
                      type="submit"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="bg-gradient-to-r from-[#0D7292] to-[#0A5C75] text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      aria-label="Send Message"
                    >
                      Send Message
                    </motion.button>
                  </motion.div>
                </motion.form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Modal for Contact Form Feedback */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[1000]" role="dialog" aria-labelledby="contact-modal-title">
          <motion.div
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-[90vw] sm:max-w-md max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center p-4 sm:p-6">
              <h5 id="contact-modal-title" className="text-lg sm:text-xl font-bold text-gray-800">
                Contact Form
              </h5>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-600 hover:text-gray-800 text-xl sm:text-2xl transition-colors"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <div className="p-4 sm:p-6 text-gray-800 text-sm sm:text-base">{modalMessage}</div>
            <div className="p-4 sm:p-6 flex justify-end">
              <motion.button
                onClick={() => setShowContactModal(false)}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold px-4 sm:px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                aria-label="Close"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Modal for Society Registration */}
      {showSocietyModal && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[1000]" role="dialog" aria-labelledby="society-modal-title">
          <motion.div
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-[90vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center p-4 sm:p-6">
              <h5 id="society-modal-title" className="text-lg sm:text-xl font-bold text-gray-800">
                Society Registration
              </h5>
              <button
                onClick={() => setShowSocietyModal(false)}
                className="text-gray-600 hover:text-gray-800 text-xl sm:text-2xl transition-colors"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <div className="p-4 sm:p-6 text-gray-800 text-sm sm:text-base">
              <p>
                Before registering, please check out all the societies on our Society Page. If you've already checked, you can proceed to apply.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mt-4">
                <motion.button
                  onClick={() => navigate('/societies')}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-gradient-to-r from-[#0D7292] to-[#0A5C75] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  aria-label="Go to Society Page"
                >
                  Go to Society Page
                </motion.button>
                <motion.button
                  onClick={() => navigate('/SocietyForm')}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-gradient-to-r from-[#0D7292] to-[#0A5C75] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  aria-label="Apply Now"
                >
                  Apply Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Contact;