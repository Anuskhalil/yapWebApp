import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import PresidentImg from "/src/images/PresidentArtsCouncil.jpg";

const PresWord = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="px-6 sm:px-6 lg:px-8" aria-labelledby="message-heading">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="text-left max-w-lg lg:max-w-none" data-aos="fade-left">
          <h2
            id="message-heading"
            className="text-2xl md:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-[#0D7292] to-[#0D7292] bg-clip-text text-transparent"
          >
            Message to Youth
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600">
            Welcome to the Youth Ambassador Program, a platform to empower young minds to shape our cultural, social, and creative future. This program offers opportunities for connection, collaboration, and contribution. From cultural festivals and creative workshops to leadership building and global dialogues, it's designed to help you realize your potential. Join us to amplify your voice, nurture your talents, and drive meaningful change. Let's create a more inclusive, vibrant, and innovative society together. Take the first step today.
          </p>
          <p className="mt-6 italic text-sm sm:text-base lg:text-lg text-gray-700">
            - Muhammad Ahmed Shah<br />
            - President, Arts Council of Pakistan
          </p>
        </div>
        <div className="w-full max-w-md lg:max-w-none mx-auto lg:mx-0" data-aos="fade-right">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={PresidentImg}
              alt="Muhammad Ahmed Shah, President of Arts Council of Pakistan"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresWord;