import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleSocietyRegisterClick = () => {
    navigate('/society-registration');
  };

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <Carousel
        showArrows={true} // Show navigation arrows
        showStatus={false} // Hide status indicator
        showThumbs={false} // Hide thumbnail navigation
        infiniteLoop={true} // Infinite loop
        autoPlay={true} // Auto-play the carousel
        interval={5000} // Change slide every 5 seconds
        stopOnHover={true} // Pause on hover
      >
        {/* First Carousel Slide (Existing Hero Content) */}
        <div className="hero-content">
          <div className="hero-text">
            <motion.h1
              className="yap-heading"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span>YOUTH</span>
              <span>AMBASSADORS</span>
              <span>PROGRAMME</span>
            </motion.h1>
            <h3 className="hero-sub-title">
              YOUTH IS THE ONLY WAY FORWARD
            </h3>
            <p className="hero-subtitle-para">
              Join the ACP Ambassador Programme at the Arts Council of Pakistan, Karachi! Enjoy exclusive event access, library privileges, skill-building, networking, and cafe discounts. Don't miss this chance to grow and make a difference in the arts!
            </p>
            <button className="hero-button" onClick={handleRegisterClick}>
              Join for free
              <span className="arrow-icon" aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* Second Carousel Slide (Join Our Societies) */}
        <div className="hero-content">
          <div className="hero-text">
            <motion.h1
              className="yap-heading"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span>JOIN OUR</span>
              <span>SOCIETIES</span>
            </motion.h1>
            <h3 className="hero-sub-title">
              BE PART OF SOMETHING BIGGER
            </h3>
            <p className="hero-subtitle-para">
              Register now to join one of our societies and connect with like-minded individuals. Gain access to exclusive events, workshops, and networking opportunities.
            </p>
            <button className="hero-button" onClick={handleSocietyRegisterClick}>
              Register Now
              <span className="arrow-icon" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </Carousel>

      <div className="hero-top-text">A PLATFORM TO LEARN, CONNECT, AND GROW</div>
    </section>
  );
};

export default Hero;