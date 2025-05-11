import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import MeetupGallery from './MeetupSlider';

import aboutImg from '/src/images/MeetUp/meetupimg26.jpg'

const AboutYap = () => {

  const AboutUsPageDescription = 'https://www.youtube.com/embed/bp6CqcKERCg?rel=0'

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const triggerButtonRef = useRef(null);

  const yapData = {
    image: aboutImg,
    title: 'Know More About the Youth Ambassador Programme',
    description:
      'The Youth Ambassador Programme (YAP) is a groundbreaking initiative launched under the visionary leadership of President Arts Council Karachi, Muhammad Ahmed Shah (S.I., H.I.). This program is dedicated to empowering the youth of Pakistan and nurturing their creative potential to drive positive change and innovation.',
    buttonText: 'Watch Video',
    videoUrl: AboutUsPageDescription,
  };

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    triggerButtonRef.current?.focus();
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleCloseModal();
      }
    };

    const trapFocus = (e) => {
      if (!isModalOpen || !modalRef.current) return;
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', trapFocus);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', trapFocus);
    };
  }, [isModalOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, ease: 'easeOut' },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="bg-white py-12 sm:py-8 mt-30"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row "
          variants={fadeIn}
        >
          <motion.div className="w-full md:w-1/2 p-0" variants={imageVariants}>
            <img
              src={yapData.image}
              alt="Youth Ambassador Programme"
              className="w-full h-100 sm:h-100 lg:h-100 object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
              }}
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 flex items-center p-2 sm:p-8"
            variants={fadeIn}
          >
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                {yapData.title}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed mb-6">
                {yapData.description}
              </p>
              <motion.button
                ref={triggerButtonRef}
                className="bg-gradient-to-r from-[#0D7292] to-[#0A5C75] text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                onClick={handleButtonClick}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="Watch YAP introduction video"
              >
                {yapData.buttonText}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section>
        <motion.div variants={fadeIn}>
          <MeetupGallery />
        </motion.div>
      </section>

      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-r from-black/90 to-black/70 flex justify-center items-center z-[1000] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            ref={modalRef}
            className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-lg"
          >
            <button
              className="absolute top-4 right-4 text-2xl font-bold text-gray-200 hover:text-[#0D7292] transition-colors"
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="relative aspect-video">
              <iframe
                src={yapData.videoUrl}
                title="Youth Ambassador Programme Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              ></iframe>
              <div
                className="absolute top-0 left-0 w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 text-sm sm:text-base"
                aria-hidden="true"
              >
                Video unavailable. Please check the embed link or ensure embedding is allowed.
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AboutYap;