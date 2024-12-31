import React from 'react';
import Slider from 'react-slick';
import './PrDrives.css';

// Import images for PR Drives
import prDrive1 from '../images/PrDrives/pr1.jpg';
import prDrive2 from '../images/PrDrives/pr2.jpg';
import prDrive3 from '../images/PrDrives/pr3.jpg';
import prDrive4 from '../images/PrDrives/pr4.jpg';
import prDrive5 from '../images/PrDrives/pr5.jpg';
import prDrive6 from '../images/PrDrives/pr6.jpg';
import prDrive7 from '../images/PrDrives/pr7.jpg';
import prDrive8 from '../images/PrDrives/pr8.jpg';
import prDrive9 from '../images/PrDrives/pr9.jpg';
import prDrive10 from '../images/PrDrives/pr10.jpg';
import prDrive11 from '../images/PrDrives/pr11.jpg';
import prDrive12 from '../images/PrDrives/pr12.jpg';

const PrDrives = () => {
  const prDrivesPhotos = [
    { image: prDrive1 },
    { image: prDrive2 },
    { image: prDrive3 },
    { image: prDrive4 },
    { image: prDrive5 },
    { image: prDrive6 },
    { image: prDrive7 },
    { image: prDrive8 },
    { image: prDrive9 },
    { image: prDrive10 },
    { image: prDrive11 },
    { image: prDrive12 },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="pr-drives-slider-container">
      <div className="pr-drives-title fs-1 fw-bold">PR Drives Gallery</div>
      <Slider {...sliderSettings}>
        {prDrivesPhotos.map((photo, index) => (
          <div key={index} className="pr-drive-slide">
            <img
              src={photo.image}
              alt={photo.title}
              className="pr-drive-image"
            />
            <div className="pr-drive-caption">{photo.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PrDrives;
