import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-top-text">
        <span>Youth Ambassadors Programme is a PLATFORM TO LEARN, CONNECT, AND GROW</span>
      </div>

      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
      >
        {/* Slide 1: Ambassador Program */}
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="yap-heading">
              <span>YOUTH</span>
              <span>AMBASSADORS</span>
              <span>PROGRAMME</span>
            </h1>
            <h3 className="hero-sub-title">Youth is the only way forward!</h3>
            <p className="hero-subtitle-para">
              Join the ACP Ambassador Programme at the Arts Council of Pakistan, Karachi!
              Enjoy exclusive events, networking, and skill-building opportunities.
            </p>
            <motion.button
              className="hero-button"
              onClick={() => navigate('/register')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now <span className="arrow-icon">→</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Slide 2: Join Societies */}
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="yap-heading">
              <span>JOIN OUR</span>
              <span>SOCIETIES</span>
            </h1>
            <h3 className="hero-sub-title">Be part of something bigger</h3>
            <p className="hero-subtitle-para">
              Register now to become a member of our societies and gain access to exclusive events, workshops, and networking opportunities.
            </p>
            <motion.button
              className="hero-button"
              onClick={() => navigate('/society-registration')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Society <span className="arrow-icon">→</span>
            </motion.button>
          </motion.div>
        </div>

        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="yap-heading">
              <span>YOUTH</span>
              <span>AMBASSADORS</span>
              <span>PROGRAMME</span>
            </h1>
            <h3 className="hero-sub-title">Youth is the only way forward!</h3>
            <p className="hero-subtitle-para">
              Join the ACP Ambassador Programme at the Arts Council of Pakistan, Karachi!
              Enjoy exclusive events, networking, and skill-building opportunities.
            </p>
            <motion.button
              className="hero-button"
              onClick={() => navigate('/register')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now <span className="arrow-icon">→</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Slide 2: Join Societies */}
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="yap-heading">
              <span>JOIN OUR</span>
              <span>SOCIETIES</span>
            </h1>
            <h3 className="hero-sub-title">Be part of something bigger</h3>
            <p className="hero-subtitle-para">
              Register now to become a member of our societies and gain access to exclusive events, workshops, and networking opportunities.
            </p>
            <motion.button
              className="hero-button"
              onClick={() => navigate('/society-registration')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Society <span className="arrow-icon">→</span>
            </motion.button>
          </motion.div>
        </div>

      </Carousel>
    </section>
  );
};

export default Hero;