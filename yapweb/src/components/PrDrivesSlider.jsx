import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './PrDrives.css';

// Import images for PR Drives
import prDrive1 from '../images/PrDrives/pr1.jpg';
import prDrive2 from '../images/PrDrives/pr2.jpg';
import prDrive3 from '../images/PrDrives/pr3.jpg';
// import prDrive4 from '../images/PrDrives/pr4.jpg';
// import prDrive5 from '../images/PrDrives/pr5.jpg';
import prDrive6 from '../images/PrDrives/pr6.jpg';
// import prDrive7 from '../images/PrDrives/pr7.jpg';
import prDrive8 from '../images/PrDrives/pr8.jpg';
import prDrive9 from '../images/PrDrives/pr9.jpg';
import prDrive10 from '../images/PrDrives/pr10.jpg';
import prDrive11 from '../images/PrDrives/pr11.jpg';
import prDrive12 from '../images/PrDrives/pr12.jpg';
import prDrive13 from '../images/PrDrives/pr13.jpeg';
import prDrive14 from '../images/PrDrives/pr14.jpeg';
import prDrive15 from '../images/PrDrives/pr15.jpeg';
import prDrive16 from '../images/PrDrives/pr16.jpeg';
import prDrive17 from '../images/PrDrives/pr17.jpeg';
import prDrive18 from '../images/PrDrives/pr18.jpeg';
import prDrive19 from '../images/PrDrives/pr19.jpeg';

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
    // { image: prDrive4 },
    // { image: prDrive5 },
    { image: prDrive11 },
    { image: prDrive6 },
    // { image: prDrive7 },
    { image: prDrive8 },
    { image: prDrive9 },
    { image: prDrive10 },
    { image: prDrive12 },
    { image: prDrive13 },
    { image: prDrive14 },
    { image: prDrive15 },
    { image: prDrive16 },
    { image: prDrive17 },
    { image: prDrive18 },
    { image: prDrive19 },
  ];

  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

  return (
    <div className="pr-drives-slider-container" data-aos="zoom-in">
      <div className="pr-drives-title fs-1 fw-bold" data-aos="fade-up">PR Drives Gallery</div>
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
  );
};

export default PrDrives;
