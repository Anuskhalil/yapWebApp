import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    { id: 1, image: prDrive1, title: 'PR Drive 1' },
    { id: 2, image: prDrive2, title: 'PR Drive 2' },
    { id: 3, image: prDrive3, title: 'PR Drive 3' },
    { id: 4, image: prDrive4, title: 'PR Drive 4' },
    { id: 5, image: prDrive6, title: 'PR Drive 6' },
    { id: 6, image: prDrive7, title: 'PR Drive 7' },
    { id: 7, image: prDrive8, title: 'PR Drive 8' },
    { id: 8, image: prDrive9, title: 'PR Drive 9' },
    { id: 9, image: prDrive10, title: 'PR Drive 10' },
    { id: 10, image: prDrive11, title: 'PR Drive 11' },
    { id: 11, image: prDrive12, title: 'PR Drive 12' },
    { id: 12, image: prDrive13, title: 'PR Drive 13' },
    { id: 13, image: prDrive14, title: 'PR Drive 14' },
    { id: 14, image: prDrive15, title: 'PR Drive 15' },
    { id: 15, image: prDrive16, title: 'PR Drive 16' },
    { id: 16, image: prDrive17, title: 'PR Drive 17' },
    { id: 17, image: prDrive18, title: 'PR Drive 18' },
    { id: 18, image: prDrive19, title: 'PR Drive 19' },
    { id: 19, image: prDrive20, title: 'PR Drive 20' },
    { id: 20, image: prDrive21, title: 'PR Drive 21' },
    { id: 21, image: prDrive22, title: 'PR Drive 22' },
    { id: 22, image: prDrive23, title: 'PR Drive 23' },
    { id: 23, image: prDrive24, title: 'PR Drive 24' },
    { id: 24, image: prDrive25, title: 'PR Drive 25' },
    { id: 25, image: prDrive26, title: 'PR Drive 26' },
    { id: 26, image: prDrive27, title: 'PR Drive 27' },
    { id: 27, image: prDrive28, title: 'PR Drive 28' },
    { id: 28, image: prDrive29, title: 'PR Drive 29' },
    { id: 29, image: prDrive30, title: 'PR Drive 30' },
    { id: 30, image: prDrive31, title: 'PR Drive 31' },
    { id: 31, image: prDrive32, title: 'PR Drive 32' },
  ];

  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="pr-drives-section py-6 px-6" data-aos="zoom-in">
      <div className="max-w-7xl mx-auto ">
        <div
          className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#0D7292] to-[#0D7292] bg-clip-text text-transparent mb-6"
          data-aos="fade-up"
        >
          PR Drives Gallery
        </div>
        <Slider {...sliderSettings}>
          {prDrivesPhotos.map((photo, index) => (
            <div key={photo.id}>
              <div className="flex flex-col items-center text-center">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="pr-drive-image w-full h-64 md:h-56 sm:h-48 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer object-cover"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                />
                <div className="pr-drive-caption mt-4 text-lg text-gray-600 font-medium">
                  {photo.title}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PrDrives;