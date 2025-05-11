import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// Images
import RhetoricRealm1 from '/src/images/ourCourses/RhetoricWorkshopsndCourses/rhetoricRealm1.jpeg';
import RhetoricRealm2 from '/src/images/ourCourses/RhetoricWorkshopsndCourses/rhetoricRealm2.jpeg';
import RhetoricRealm3 from '/src/images/ourCourses/RhetoricWorkshopsndCourses/rhetoricRealm3.jpeg';
import RhetoricRealm4 from '/src/images/ourCourses/RhetoricWorkshopsndCourses/rhetoricRealm4.jpeg';
import RhetoricRealm5 from '/src/images/ourCourses/RhetoricWorkshopsndCourses/rhetoricRealm5.jpeg';
import RhetoricRealm6 from '/src/images/ourCourses/RhetoricWorkshopsndCourses/rhetoricRealm6.jpeg';

const Courses = () => {

  const videoUrl1 = 'https://www.youtube.com/embed/VHxDvKPM7ho?rel=0';
  const videoUrl2 = 'https://www.youtube.com/embed/wHHL-pGzWeQ?si=g58Jn1Y4wWFr7vS7';

  const courses = [
    {
      id: 1,
      title: 'Why Entrepreneurs Fail: Understanding the Challenges',
      arrangedBy: 'YAP Entrepreneurship Society',
      description: 'Learn the common pitfalls that entrepreneurs face and how to overcome them.',
      videoType: 'youtube',
      video: videoUrl1,
    },
    {
      id: 2,
      title: 'Cyber Security for Youth',
      arrangedBy: 'Youth Ambassador Programme and Collaboration with ExploitXpErtz',
      description: 'Learn the basics of cybersecurity and how to protect yourself from online threats.',
      videoType: 'youtube',
      video: videoUrl2,
    },
    {
      id: 3,
      title: 'Public Speaking Workshops',
      arrangedBy: 'Rhetoric Realm',
      description: 'Learn the art of public speaking and how to effectively communicate your ideas.',
      videoType: null,
      images: [
        RhetoricRealm1,
        RhetoricRealm2,
        RhetoricRealm3,
        RhetoricRealm4,
        RhetoricRealm5,
        RhetoricRealm6,
      ],
    },
    // {
    //   id: 4,
    //   title: 'Workshop 1',
    //   arrangedBy: 'ACP-YAP',
    //   description: 'Participate in this interactive workshop to boost your creativity.',
    //   videoType: null,
    //   images: [
    //     'https://via.placeholder.com/600x400?text=Workshop+1+Image+1',
    //     'https://via.placeholder.com/600x400?text=Workshop+1+Image+2',
    //     'https://via.placeholder.com/600x400?text=Workshop+1+Image+3',
    //   ],
    // },
    // {
    //   id: 5,
    //   title: 'Workshop 2',
    //   arrangedBy: 'ACP-YAP',
    //   description: 'Learn practical skills in this engaging workshop by ACP-YAP.',
    //   videoType: null,
    //   images: [
    //     'https://via.placeholder.com/600x400?text=Workshop+2+Image+1',
    //     'https://via.placeholder.com/600x400?text=Workshop+2+Image+2',
    //     'https://via.placeholder.com/600x400?text=Workshop+2+Image+3',
    //   ],
    // },
    // {
    //   id: 6,
    //   title: 'Workshop 3',
    //   arrangedBy: 'ACP-YAP',
    //   description: 'Dive into this workshop to explore new artistic opportunities.',
    //   videoType: null,
    //   images: [
    //     'https://via.placeholder.com/600x400?text=Workshop+3+Image+1',
    //     'https://via.placeholder.com/600x400?text=Workshop+3+Image+2',
    //     'https://via.placeholder.com/600x400?text=Workshop+3+Image+3',
    //   ],
    // },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    adaptiveHeight: true,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="courses-page bg-white py-20 max-w-7xl mx-auto px-4">
      <style>
        {`
          .slick-dots li.slick-active button:before {
            color: #0D7292;
          }
          .slick-prev:before,
          .slick-next:before {
            color: #0D7292;
          }
          .slick-prev,
          .slick-next {
            z-index: 10;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#0D7292] to-[#0A5C75] bg-clip-text text-transparent mb-4">
            Our Courses & Workshops
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed">
            Discover a range of courses and workshops designed to ignite your creativity and develop your skills with the Arts Council of Pakistan Karachi's Youth Ambassador Program.
          </p>
        </motion.div>
      </section>

      {/* Courses/Workshops Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200/20 overflow-hidden"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-6 flex flex-col">
                {/* YouTube Video or Image Slider */}
                {course.videoType === 'youtube' ? (
                  <div className="relative aspect-video mb-4">
                    <iframe
                      src={course.video}
                      title={`${course.title} Workshop Video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    ></iframe>
                    <div
                      className="hidden absolute top-0 left-0 w-full h-full bg-gray-100 rounded-lg items-center justify-center text-gray-600 text-sm sm:text-base"
                      aria-hidden="true"
                    >
                      Video unavailable. Please check the embed link or ensure embedding is allowed.
                    </div>
                  </div>
                ) : (
                  <Slider {...sliderSettings} className="mb-4">
                    {course.images.map((image, index) => (
                      <div key={index}>
                        <img
                          src={image}
                          alt={`${course.title} Image ${index + 1}`}
                          className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
                          }}
                        />
                      </div>
                    ))}
                  </Slider>
                )}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2">
                  Arranged by: {course.arrangedBy}
                </p>
                <p className="text-sm sm:text-base text-gray-600 line-clamp-3 mb-4">
                  {course.description}
                </p>
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Link
                    to={`/courses/${course.id}`}
                    className="bg-gradient-to-r from-[#0D7292] to-[#0A5C75] text-white font-semibold px-4 sm:px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    aria-label={`Learn more about ${course.title}`}
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/90 to-black/70 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0D7292] to-[#0A5C75] bg-clip-text text-transparent mb-4">
            Join Our Creative Journey
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed mb-6">
            Ready to explore your passion for the arts? Contact us to learn more about our courses and workshops or join the Youth Ambassador Program today!
          </p>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Link
              to="/#contact"
              className="bg-gradient-to-r from-[#0D7292] to-[#0A5C75] text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Contact us to join"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Courses;