import React, { useEffect } from 'react';
import './PresWords.css';
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
    <section className="message-section mt-5 py-5" aria-labelledby="message-heading">
      <div className="message-section-content">

        <div className="message-text" data-aos="fade-left">
          <h2 id="message-heading" className="message-heading">
            Message to Youth
          </h2>
          <p className="message-paragraph">
            Welcome to the Youth Ambassador Program, a platform to empower young minds to shape our cultural, social, and creative future. This program offers opportunities for connection, collaboration, and contribution. From cultural festivals and creative workshops to leadership building and global dialogues, it's designed to help you realize your potential. Join us to amplify your voice, nurture your talents, and drive meaningful change. Let's create a more inclusive, vibrant, and innovative society together. Take the first step today.
          </p>
          <p className="message-signature">
            - Muhammad Ahmed Shah<br />
            - President, Arts Council of Pakistan
          </p>
        </div>
        <div className="message-image-container" data-aos="fade-right">
          <img
            src="./src/images/PresidentArtsCouncil.jpg"
            alt="Muhammad Ahmed Shah"
            className="message-image"
          />
        </div>
      </div>
    </section>
  );
};

export default PresWord;