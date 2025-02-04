import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

// Import the video from the src folder
import heroVideo from '../videos/AzadiFestival2024.mp4';

const Hero = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="hero-section mt-5 py-5">
      {/* Use the imported video */}
      <video className="hero-video" autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Container className="hero-main">
        <h1 className="yap-heading">YOUTH AMBASSADOR PROGRAMME</h1>
        <h4 className="yap-quote-heading">YOUTH IS THE ONLY WAY FORWARD</h4>
        <p className="yap-para">
          Join the ACP Ambassador Programme at the Arts Council of Pakistan, Karachi! Enjoy exclusive event access, library privileges, skill-building, networking, and cafe discounts. Don't miss this chance to grow and make a difference in the arts!
        </p>
        <Button className="fw-bold hero-button pe-5 px-5 py-2" onClick={handleRegisterClick}>
          Register Now
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
