import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Static imports
import meetupimg1 from '../images/MeetUp/meetupimg1.jpg';
import meetupimg2 from '../images/MeetUp/meetupimg2.jpg';
import meetupimg3 from '../images/MeetUp/meetupimg3.jpg';
import meetupimg4 from '../images/MeetUp/meetupimg4.jpg';
import meetupimg5 from '../images/MeetUp/meetupimg5.jpg';
import meetupimg6 from '../images/MeetUp/meetupimg6.jpg';
import meetupimg7 from '../images/MeetUp/meetupimg7.jpg';
import meetupimg8 from '../images/MeetUp/meetupimg8.jpg';
import meetupimg9 from '../images/MeetUp/meetupimg9.jpg';
import meetupimg10 from '../images/MeetUp/meetupimg10.jpg';
import meetupimg11 from '../images/MeetUp/meetupimg11.jpg';
import meetupimg12 from '../images/MeetUp/meetupimg12.jpg';
import meetupimg13 from '../images/MeetUp/meetupimg13.jpg';
import meetupimg14 from '../images/MeetUp/meetupimg14.jpg';
import meetupimg15 from '../images/MeetUp/meetupimg15.jpg';
import meetupimg16 from '../images/MeetUp/meetupimg16.jpg';
import meetupimg17 from '../images/MeetUp/meetupimg17.jpg';
import meetupimg18 from '../images/MeetUp/meetupimg18.jpg';
import meetupimg19 from '../images/MeetUp/meetupimg19.jpg';
import meetupimg20 from '../images/MeetUp/meetupimg20.jpg';
import meetupimg21 from '../images/MeetUp/meetupimg21.jpg';
import meetupimg22 from '../images/MeetUp/meetupimg22.jpg';
import meetupimg23 from '../images/MeetUp/meetupimg23.jpg';
import meetupimg24 from '../images/MeetUp/meetupimg24.jpg';
import meetupimg25 from '../images/MeetUp/meetupimg25.jpg';
import meetupimg26 from '../images/MeetUp/meetupimg26.jpg';
import meetupimg27 from '../images/MeetUp/meetupimg27.jpg';
import meetupimg28 from '../images/MeetUp/meetupimg28.jpg';
import meetupimg29 from '../images/MeetUp/meetupimg29.jpg';
import meetupimg30 from '../images/MeetUp/meetupimg30.jpg';
import meetupimg31 from '../images/MeetUp/meetupimg31.jpg';
import meetupimg32 from '../images/MeetUp/meetupimg32.jpg';
import meetupimg33 from '../images/MeetUp/meetupimg33.jpg';
import meetupimg34 from '../images/MeetUp/meetupimg34.jpg';
import meetupimg35 from '../images/MeetUp/meetupimg35.jpg';
import meetupimg36 from '../images/MeetUp/meetupimg36.jpg';
import meetupimg37 from '../images/MeetUp/meetupimg37.jpg';
import meetupimg38 from '../images/MeetUp/meetupimg38.jpg';
import meetupimg39 from '../images/MeetUp/meetupimg39.jpg';
import meetupimg40 from '../images/MeetUp/meetupimg40.jpg';
import meetupimg41 from '../images/MeetUp/meetupimg41.jpg';

const meetupImages = [
  { title: 'Meetup 1', image: meetupimg1 },
  { title: 'Meetup 2', image: meetupimg2 },
  { title: 'Meetup 3', image: meetupimg3 },
  { title: 'Meetup 4', image: meetupimg4 },
  { title: 'Meetup 5', image: meetupimg5 },
  { title: 'Meetup 6', image: meetupimg6 },
  { title: 'Meetup 7', image: meetupimg7 },
  { title: 'Meetup 8', image: meetupimg8 },
  { title: 'Meetup 9', image: meetupimg9 },
  { title: 'Meetup 10', image: meetupimg10 },
  { title: 'Meetup 11', image: meetupimg11 },
  { title: 'Meetup 12', image: meetupimg12 },
  { title: 'Meetup 13', image: meetupimg13 },
  { title: 'Meetup 14', image: meetupimg14 },
  { title: 'Meetup 15', image: meetupimg15 },
  { title: 'Meetup 16', image: meetupimg16 },
  { title: 'Meetup 17', image: meetupimg17 },
  { title: 'Meetup 18', image: meetupimg18 },
  { title: 'Meetup 19', image: meetupimg19 },
  { title: 'Meetup 20', image: meetupimg20 },
  { title: 'Meetup 21', image: meetupimg21 },
  { title: 'Meetup 22', image: meetupimg22 },
  { title: 'Meetup 23', image: meetupimg23 },
  { title: 'Meetup 24', image: meetupimg24 },
  { title: 'Meetup 25', image: meetupimg25 },
  { title: 'Meetup 26', image: meetupimg26 },
  { title: 'Meetup 27', image: meetupimg27 },
  { title: 'Meetup 28', image: meetupimg28 },
  { title: 'Meetup 29', image: meetupimg29 },
  { title: 'Meetup 30', image: meetupimg30 },
  { title: 'Meetup 31', image: meetupimg31 },
  { title: 'Meetup 32', image: meetupimg32 },
  { title: 'Meetup 33', image: meetupimg33 },
  { title: 'Meetup 34', image: meetupimg34 },
  { title: 'Meetup 35', image: meetupimg35 },
  { title: 'Meetup 36', image: meetupimg36 },
  { title: 'Meetup 37', image: meetupimg37 },
  { title: 'Meetup 38', image: meetupimg38 },
  { title: 'Meetup 39', image: meetupimg39 },
  { title: 'Meetup 40', image: meetupimg40 },
  { title: 'Meetup 41', image: meetupimg41 },
];

const MeetupGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="meetup-container py-12 text-center">
      <motion.h2
        className="meetup-title text-3xl md:text-4xl font-bold text-gray-900 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Meetup Gallery
      </motion.h2>
      <div className="slider-wrapper px-8 max-w-6xl mx-auto">
        <Slider {...sliderSettings}>
          {meetupImages.map((photo, index) => (
            <motion.div
              key={index}
              className="meetup-photo-wrapper p-2 cursor-pointer outline-none"
              onClick={() => handleImageClick(photo.image)}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <img
                className="meetup-photo w-full h-auto rounded-2xl shadow-md hover:scale-103 transition-transform duration-300"
                src={photo.image}
                alt={photo.title}
              />
              <motion.div
                className="meetup-photo-caption text-center mt-2 text-base text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p>{photo.title}</p>
              </motion.div>
            </motion.div>
          ))}
        </Slider>
      </div>

      <AnimatePresence>
        {showModal && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000]"
            onClick={() => setShowModal(false)}
          >
            <motion.img
              src={currentImage}
              alt="Meetup"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()} // Prevent closing on image click
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MeetupGallery;