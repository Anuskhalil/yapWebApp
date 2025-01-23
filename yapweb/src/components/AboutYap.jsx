import React, { useState } from "react";
import "./AboutYap.css";
import aboutYapImage from "../images/MeetUp/meetupimg26.jpg";
import MeetupGallery from "./MeetupSlider";
import { Button } from 'react-bootstrap';


const AboutYap = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container-fluid" id="aboutUs">
      <div className="row align-items-center aboutYap-section">
        {/* Left Image Section */}
        <div className="col-lg-6 col-md-12 p-0">
          <img
            src={aboutYapImage}
            alt="aboutYap Program"
            className="img-fluid"
          />
        </div>

        {/* Right Text Section */}
        <div className="col-lg-6 col-md-12 d-flex align-items-center">
          <div className="text-box">
            <h1 className="fw-bold">
              Know more about the Youth Ambassador Programme
            </h1>
            {/* <p className="text-muted mt-3">Youth is the only way forward!</p> */}
            <p className="text-muted mt-3">The Youth Ambassador Programme (YAP) is a groundbreaking initiative launched under the visionary leadership of President Arts Council Karachi, Muhammad Ahmed Shah (S.I., H.I.). This program is dedicated to empowering the youth of Pakistan and nurturing their creative potential to drive positive change and innovation.</p>
            <Button className="mt-3 fw-bold hero-button" onClick={handleButtonClick}>
              Know more
            </Button>
          </div>
        </div>
      </div>

      {/* Add Meetup Gallery below the content */}
      <div className="mt-5">
        {/* <h2 className="text-center fw-bold">Meetup Gallery</h2> */}
        <MeetupGallery />
      </div>

      {/* Modal Popup for Video */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
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
        </div>
      )}
    </div>
  );
};

export default AboutYap;
