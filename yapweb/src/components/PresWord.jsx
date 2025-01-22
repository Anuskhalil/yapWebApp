// src/components/PresWords.js

import React, { useEffect } from 'react';
import './PresWords.css';
import presWord from '../images/PresidentArtsCouncil.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PresWord = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  return (
    <div className="container py-5" id="preswords">
      <div className="row align-items-center">
        <div
          className="col-lg-6 mb-4 mb-lg-0 text-center"
          data-aos="fade-right" 
        >
          <img
            src={presWord}
            alt="President"
            className="img-fluid shadow-sm"
          />
        </div>
        <div
          className="col-lg-6"
          data-aos="fade-left" 
        >
          <h2 className="mb-3 fs-1 font-bold">Message to Youth</h2>
          <p className="presWord">
            Welcome to the Youth Ambassador Program a platform to empower future leaders. At the Arts Council of Pakistan Karachi, I believe in the power of young minds to shape our cultural, social, and creative future.

            This program offers opportunities for connection, collaboration, and contribution. From cultural festivals and creative workshops to leadership building and global dialogues, it’s designed to help you realize your potential.

            Join us to amplify your voice, nurture your talents, and drive meaningful change. Let’s create a more inclusive, vibrant, and innovative society together.

            Take the first step today.
          </p>
          <h4 className="text-muted d-flex justify-content-end align-items-center text-align-center">- Muhammad Ahmed Shah</h4>
          <h4 className="text-muted d-flex justify-content-end align-items-center text-align-center">- President, Arts Council of Pakistan</h4>
        </div>
      </div>
    </div>
  );
};

export default PresWord;
