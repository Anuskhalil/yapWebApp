import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import { Modal } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MeetupSlider.css';

// Page 01
import meetupimg1 from '../images/MeetUp/meetupimg1.jpg';
import meetupimg2 from '../images/MeetUp/meetupimg2.jpg';
import meetupimg3 from '../images/MeetUp/meetupimg3.jpg';
import meetupimg4 from '../images/MeetUp/meetupimg4.jpg';
import meetupimg5 from '../images/MeetUp/meetupimg5.jpg';
import meetupimg6 from '../images/MeetUp/meetupimg6.jpg';
import meetupimg7 from '../images/MeetUp/meetupimg7.jpg';
import meetupimg8 from '../images/MeetUp/meetupimg8.jpg';

// Page 02
import meetupimg9 from '../images/MeetUp/meetupimg9.jpg';
import meetupimg10 from '../images/MeetUp/meetupimg10.jpg';
import meetupimg11 from '../images/MeetUp/meetupimg11.jpg';
import meetupimg12 from '../images/MeetUp/meetupimg12.jpg';
import meetupimg13 from '../images/MeetUp/meetupimg13.jpg';
import meetupimg14 from '../images/MeetUp/meetupimg14.jpg';
import meetupimg15 from '../images/MeetUp/meetupimg15.jpg';
import meetupimg16 from '../images/MeetUp/meetupimg16.jpg';

// Page 03
import meetupimg17 from '../images/MeetUp/meetupimg17.jpg';
import meetupimg18 from '../images/MeetUp/meetupimg18.jpg';
import meetupimg19 from '../images/MeetUp/meetupimg19.jpg';
import meetupimg20 from '../images/MeetUp/meetupimg20.jpg';
import meetupimg21 from '../images/MeetUp/meetupimg21.jpg';
import meetupimg22 from '../images/MeetUp/meetupimg22.jpg';
import meetupimg23 from '../images/MeetUp/meetupimg23.jpg';
import meetupimg24 from '../images/MeetUp/meetupimg24.jpg';

// Page 04
import meetupimg25 from '../images/MeetUp/meetupimg25.jpg';
import meetupimg26 from '../images/MeetUp/meetupimg26.jpg';
import meetupimg27 from '../images/MeetUp/meetupimg27.jpg';
import meetupimg28 from '../images/MeetUp/meetupimg28.jpg';
import meetupimg29 from '../images/MeetUp/meetupimg29.jpg';
import meetupimg30 from '../images/MeetUp/meetupimg30.jpg';
import meetupimg31 from '../images/MeetUp/meetupimg31.jpg';
import meetupimg32 from '../images/MeetUp/meetupimg32.jpg';

const Meetup = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  const meetupPhotos = [
    { title: 'Meetup 25', image: meetupimg25 },
    { title: 'Meetup 26', image: meetupimg26 },
    { title: 'Meetup 27', image: meetupimg27 },
    { title: 'Meetup 28', image: meetupimg28 },
    { title: 'Meetup 29', image: meetupimg29 },
    { title: 'Meetup 30', image: meetupimg30 },
    { title: 'Meetup 31', image: meetupimg31 },
    { title: 'Meetup 32', image: meetupimg32 },
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
  ];

  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

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
    <div className="meetup-container">
      <div className="meetup-title fs-1 fw-bold" data-aos="fade-up">
        Meetup Gallery
      </div>
      <div className="slider-wrapper" data-aos="zoom-in">
        <Slider {...sliderSettings}>
          {meetupPhotos.map((photo, index) => (
            <div
              key={index}
              className="meetup-photo-wrapper"
              onClick={() => handleImageClick(photo.image)}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <img
                className="img-fluid meetup-photo"
                src={photo.image}
                alt={photo.title}
              />
              <div className="meetup-photo-caption">
                <p>{photo.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
      >
        <Modal.Body className="text-center modal-body">
          <img
            src={currentImage}
            alt="Meetup"
            className="img-fluid large-modal-image"
            style={{
              borderRadius: '10px',
              maxHeight: '90vh',
              objectFit: 'contain',
            }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Meetup;



