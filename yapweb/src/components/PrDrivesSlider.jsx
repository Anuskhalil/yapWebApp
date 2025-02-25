import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './PrDrives.css';

// Import images for PR Drives
import prDrive1 from '../images/PrDrives/pr1.jpg';
import prDrive2 from '../images/PrDrives/pr2.jpg';
import prDrive3 from '../images/PrDrives/pr3.jpg';
import prDrive4 from '../images/PrDrives/pr4.jpg';
import prDrive6 from '../images/PrDrives/pr6.jpg';
import prDrive7 from '../images/PrDrives/pr7.jpg';
import prDrive8 from '../images/PrDrives/pr8.jpg';
import prDrive9 from '../images/PrDrives/pr9.jpg';
import prDrive10 from '../images/PrDrives/pr10.jpg';
import prDrive11 from '../images/PrDrives/pr11.jpg';
import prDrive12 from '../images/PrDrives/pr12.jpg';
import prDrive13 from '../images/PrDrives/pr13.jpg';
import prDrive14 from '../images/PrDrives/pr14.jpeg';
import prDrive15 from '../images/PrDrives/pr15.jpg';
import prDrive16 from '../images/PrDrives/pr16.jpeg';
import prDrive17 from '../images/PrDrives/pr17.jpg';
import prDrive18 from '../images/PrDrives/pr18.jpeg';
import prDrive19 from '../images/PrDrives/pr19.jpeg';
import prDrive20 from '../images/PrDrives/pr20.jpg';
import prDrive21 from '../images/PrDrives/pr21.jpg';
import prDrive22 from '../images/PrDrives/pr22.jpg';
import prDrive23 from '../images/PrDrives/pr23.jpg';
import prDrive24 from '../images/PrDrives/pr24.jpeg';
import prDrive25 from '../images/PrDrives/pr25.jpg';
import prDrive26 from '../images/PrDrives/pr26.jpeg';
import prDrive27 from '../images/PrDrives/pr27.jpg';
import prDrive28 from '../images/PrDrives/pr28.jpeg';
import prDrive29 from '../images/PrDrives/pr29.jpg';
import prDrive30 from '../images/PrDrives/pr30.jpg';
import prDrive31 from '../images/PrDrives/pr31.jpg';
import prDrive32 from '../images/PrDrives/pr32.jpg';

const PrDrives = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  const prDrivesPhotos = [
    { image: prDrive1 },
    { image: prDrive2 },
    { image: prDrive3 },
    { image: prDrive4 },
    { image: prDrive6 },
    { image: prDrive7 },
    { image: prDrive8 },
    { image: prDrive9 },
    { image: prDrive10 },
    { image: prDrive11 },
    { image: prDrive12 },
    { image: prDrive13 },
    { image: prDrive14 },
    { image: prDrive15 },
    { image: prDrive16 },
    { image: prDrive17 },
    { image: prDrive18 },
    { image: prDrive19 },
    { image: prDrive20 },
    { image: prDrive21 },
    { image: prDrive22 },
    { image: prDrive23 },
    { image: prDrive24 },
    { image: prDrive25 },
    { image: prDrive26 },
    { image: prDrive27 },
    { image: prDrive28 },
    { image: prDrive29 },
    { image: prDrive30 },
    { image: prDrive31 },
    { image: prDrive32 },
  ];

  const sliderSettings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 4, // Default number of slides to show on large screens
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px (tablets)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px (small tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For screens smaller than 480px (mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="pr-drives-section mt-5 py-5" data-aos="zoom-in">
      <div className="pr-drives-slider-container">
        <div className="pr-drives-title ms-4" data-aos="fade-up">
          PR Drives Gallery
        </div>
        <Slider {...sliderSettings}>
          {prDrivesPhotos.map((photo, index) => (
            <div key={index} className="pr-drive-slide">
              <img
                src={photo.image}
                alt={photo.title}
                className="pr-drive-image"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              />
              <div className="pr-drive-caption">{photo.title}</div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PrDrives;