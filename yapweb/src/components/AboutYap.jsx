import React, { useState } from "react";
import "./AboutYap.css";
import aboutYapImage from "../images/MeetUp/meetupimg26.jpg";
import MeetupGallery from "./MeetupSlider";
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion'; // Import Framer Motion


const AboutYap = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Framer Motion Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="about-page py-5 mt-5"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="row align-items-center aboutYap-section">
        {/* Left Image Section */}
        <motion.div className="col-lg-6 col-md-12 p-0" variants={imageVariants}>
          <img
            src={aboutYapImage}
            alt="aboutYap Program"
            className="img-fluid about-image"
          />
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          className="col-lg-6 col-md-12 d-flex align-items-center"
          variants={fadeIn}
        >
          <div className="text-box mt-5 py-5">
            <h1 className="about-title">
              Know more about the Youth Ambassador Programme
            </h1>
            <p className="about-description">
              The Youth Ambassador Programme (YAP) is a groundbreaking initiative launched under the visionary leadership of President Arts Council Karachi, Muhammad Ahmed Shah (S.I., H.I.). This program is dedicated to empowering the youth of Pakistan and nurturing their creative potential to drive positive change and innovation.
            </p>
            <Button className="about-button fw-bold py-3" onClick={handleButtonClick}>
              Watch Video
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Meetup Gallery below the content */}
      <div className="mt-5">
        <MeetupGallery />
      </div>

      {/* Modal Popup for Video */}
      {isModalOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              ×
            </span>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/bp6CqcKERCg?si=nf8GBk1PCEoY1JqX"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="MVP Program Video"
            ></iframe>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AboutYap;