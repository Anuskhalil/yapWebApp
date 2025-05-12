import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import hero1 from '/src/images/YapEventsWorkshops/azadiFestival8.jpg';
import hero2 from '/src/images/YapEventsWorkshops/azadiFestival10.jpg';
import hero3 from '/src/images/YapEventsWorkshops/azadiFestival11.jpg';
import hero4 from '/src/images/YapEventsWorkshops/azadiFestival12.jpg';
import hero5 from '/src/images/YapEventsWorkshops/azadiFestival13.jpg';
import hero6 from '/src/images/YapEventsWorkshops/azadiFestival7.jpg';

// Placeholder background images
const backgroundImages = [hero1, hero2, hero3, hero4, hero5, hero6];

// Slide data
const slides = [
  {
    heading: ["YOUTH", "AMBASSADORS", "PROGRAMME"],
    subTitle: "Youth is the only way forward!",
    description:
      "Join the ACP Ambassador Programme at the Arts Council of Pakistan, Karachi! Enjoy exclusive events, networking, and skill-building opportunities.",
    buttonText: "Register Now",
    buttonPath: '/register',
  },
  {
    heading: ["JOIN OUR", "SOCIETIES"],
    subTitle: "Be part of something bigger",
    description:
      "Register now to become a member of our societies and gain access to exclusive events, workshops, and networking opportunities.",
    buttonText: "Join Our Society",
    buttonPath: '/society-registration',
  },
  {
    heading: ["YOUTH", "AMBASSADORS", "PROGRAMME"],
    subTitle: "Youth is the only way forward!",
    description:
      "Join the ACP Ambassador Programme at the Arts Council of Pakistan, Karachi! Enjoy exclusive events, networking, and skill-building opportunities.",
    buttonText: "Register Now",
    buttonPath: '/register',
  },
  {
    heading: ["JOIN OUR", "SOCIETIES"],
    subTitle: "Be part of something bigger",
    description:
      "Register now to become a member of our societies and gain access to exclusive events, workshops, and networking opportunities.",
    buttonText: "Join Our Society",
    buttonPath: '/society-registration',
  },
  {
    heading: ["YOUTH", "AMBASSADORS", "PROGRAMME"],
    subTitle: "Youth is the only way forward!",
    description:
      "Join the ACP Ambassador Programme at the Arts Council of Pakistan, Karachi! Enjoy exclusive events, networking, and skill-building opportunities.",
    buttonText: "Register Now",
    buttonPath: '/register',
  },
  {
    heading: ["JOIN OUR", "SOCIETIES"],
    subTitle: "Be part of something bigger",
    description:
      "Register now to become a member of our societies and gain access to exclusive events, workshops, and networking opportunities.",
    buttonText: "Join Our Society",
    buttonPath: '/society-registration',
  },
];

const Hero = () => {
  const navigate = useNavigate();

  // Animation for scrolling text
  const scrollTextVariants = {
    animate: {
      x: ["100%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
  };

  // Animation for slide content
  const slideContentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-[70vh] md:min-h-[70vh] lg:min-h-[80vh] overflow-hidden text-white font-sans">
      {/* Scrolling Text at the Top */}
      <div className="absolute top-4 sm:top-6 md:top-8 w-full text-center z-20 overflow-hidden">
        <motion.span
          className="inline-block whitespace-nowrap text-sm sm:text-base md:text-lg font-bold uppercase text-white tracking-wider"
          variants={scrollTextVariants}
          animate="animate"
        >
          Youth Ambassadors Programme is a PLATFORM TO LEARN, CONNECT, AND GROW
        </motion.span>
      </div>

      {/* Carousel */}
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        className="relative w-full"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative min-h-[70vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center bg-cover bg-center w-full"
            style={{ backgroundImage: `url(${backgroundImages[index]})` }}
          >
            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/40 to-black/60 z-10" />

            {/* Slide Content */}
            <motion.div
              className="relative z-20 flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-4 sm:px-6 md:px-8 w-full"
              variants={slideContentVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="yap-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight mb-3 sm:mb-4 md:mb-6">
                {slide.heading.map((line, i) => (
                  <span
                    key={i}
                    className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg"
                  >
                    {line}
                  </span>
                ))}
              </h1>
              <h3 className="hero-sub-title text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-white drop-shadow-md">
                {slide.subTitle}
              </h3>
              <p className="hero-subtitle-para text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 max-w-3xl text-gray-200 drop-shadow-sm">
                {slide.description}
              </p>
              <motion.button
                className="hero-button bg-[#0D7292] text-white font-bold px-5 sm:px-6 py-2 sm:py-3 md:px-8 md:py-4 rounded-lg hover:bg-[#0D7292]/90 transition-all text-sm sm:text-base md:text-lg"
                onClick={() => navigate(slide.buttonPath)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {slide.buttonText} <span className="arrow-icon ml-2">→</span>
              </motion.button>
            </motion.div>
          </div>
        ))}
      </Carousel>

      {/* Custom Carousel Dots and Arrows Styling */}
      <style>
        {`
          .carousel .control-dots {
            bottom: 10px;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
            gap: 6px;
          }
          .carousel .control-dots .dot {
            background: #ffffff80;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            transition: background 0.3s, transform 0.3s;
          }
          .carousel .control-dots .dot.selected {
            background: #ffffff;
            transform: scale(1.2);
          }
          .carousel .control-arrow {
            background: rgba(0, 0, 0, 0.5) !important;
            border-radius: 50%;
            width: 40px !important;
            height: 40px !important;
            top: 50% !important;
            transform: translateY(-50%);
            opacity: 0.7;
            transition: opacity 0.3s;
          }
          .carousel .control-arrow:hover {
            opacity: 1;
          }
          .carousel .control-prev {
            left: 8px !important;
          }
          .carousel .control-next {
            right: 8px !important;
          }
          @media (max-width: 640px) {
            .carousel .control-arrow {
              width: 32px !important;
              height: 32px !important;
            }
            .carousel .control-prev {
              left: 4px !important;
            }
            .carousel .control-next {
              right: 4px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;