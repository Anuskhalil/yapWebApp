import React, { useState } from 'react';
import Slider from 'react-slick';
import './MoUSignedUni.css';

// Importing university logos and images
import ned from '../images/MouUniversities/Logos/nedLogo.jpg';
import smiu from '../images/MouUniversities/Logos/smiuLogo.jpg';
import dawood from '../images/MouUniversities/Logos/dawoodLogo.png';
import aliGarh from '../images/MouUniversities/Logos/aliGarhUni.png';
import beacon from '../images/MouUniversities/Logos/beaconHouse.png';
import suffa from '../images/MouUniversities/Logos/dhaSuffaUni.png';
import greenWich from '../images/MouUniversities/Logos/greenwichUni1.jpg';
import highbrow from '../images/MouUniversities/Logos/highbrowCollege.png';
import ibaSukkur from '../images/MouUniversities/Logos/ibaSukkurUni.jpg';
import ku from '../images/MouUniversities/Logos/karachiUni.jpeg';
import metropolitan from '../images/MouUniversities/Logos/metropolitanUni.png';
import newports from '../images/MouUniversities/Logos/newportsInstitute.jpeg';
import nixor from '../images/MouUniversities/Logos/nixorCollege.png';
import salimHabib from '../images/MouUniversities/Logos/salimHabibUni.jpeg';
import sirSyed from '../images/MouUniversities/Logos/sirSyedUni.png';
import ziauddin from '../images/MouUniversities/Logos/ziauddinUni.jpeg';

// NED University
import nedMoU1 from '../images/MouUniversities/NedUni/ned1.jpeg';
import nedMoU2 from '../images/MouUniversities/NedUni/ned2.jpeg';
import nedMoU3 from '../images/MouUniversities/NedUni/ned3.jpeg';
import nedMoU4 from '../images/MouUniversities/NedUni/ned4.jpeg';

// SMI University
import smiuMoU1 from '../images/MouUniversities/SmiuUni/smiu1.jpeg';
import smiuMoU2 from '../images/MouUniversities/SmiuUni/smiu1.jpeg';

// Dawood University
import dawoodMoU1 from '../images/MouUniversities/DawoodUni/dawood1.jpg';
import dawoodMoU2 from '../images/MouUniversities/DawoodUni/dawood2.jpg';
import dawoodMoU3 from '../images/MouUniversities/DawoodUni/dawood3.jpg';
import dawoodMoU4 from '../images/MouUniversities/DawoodUni/dawood4.jpg';
import dawoodMoU5 from '../images/MouUniversities/DawoodUni/dawood5.jpg';
import dawoodMoU6 from '../images/MouUniversities/DawoodUni/dawood6.jpg';

// Newports University
import newports1 from '../images/MouUniversities/NewportsUni/newports2.jpg';
import newports2 from '../images/MouUniversities/NewportsUni/newports3.jpg';
import newports3 from '../images/MouUniversities/NewportsUni/newports1.jpg';
import newports4 from '../images/MouUniversities/NewportsUni/newports4.jpg';
import newports5 from '../images/MouUniversities/NewportsUni/newports5.jpg';
import newports6 from '../images/MouUniversities/NewportsUni/newports6.jpg';

// ZiaUddin University
import ziauddin1 from '../images/MouUniversities/ZiauddinUni/ziauddin1.jpg';
import ziauddin2 from '../images/MouUniversities/ZiauddinUni/ziauddin2.jpg';
import ziauddin3 from '../images/MouUniversities/ZiauddinUni/ziauddin3.jpg';
import ziauddin4 from '../images/MouUniversities/ZiauddinUni/ziauddin4.jpg';
import ziauddin5 from '../images/MouUniversities/ZiauddinUni/ziauddin5.jpg';
import ziauddin6 from '../images/MouUniversities/ZiauddinUni/ziauddin6.jpg';

// Highbrow University
import highbrow1 from '../images/MouUniversities/HighbrowUni/highbrow1.jpg';
import highbrow2 from '../images/MouUniversities/HighbrowUni/highbrow2.jpg';
import highbrow3 from '../images/MouUniversities/HighbrowUni/highbrow3.jpg';
import highbrow4 from '../images/MouUniversities/HighbrowUni/highbrow4.jpg';
import highbrow5 from '../images/MouUniversities/HighbrowUni/highbrow5.jpg';
import highbrow6 from '../images/MouUniversities/HighbrowUni/highbrow6.jpg';

// IBA Sukkur University
import ibaSukkur1 from '../images/MouUniversities/IbaSukkurUni/ibasukkur1.jpg';
import ibaSukkur2 from '../images/MouUniversities/IbaSukkurUni/ibasukkur2.jpg';
import ibaSukkur3 from '../images/MouUniversities/IbaSukkurUni/ibasukkur3.jpg';
import ibaSukkur4 from '../images/MouUniversities/IbaSukkurUni/ibasukkur4.jpg';
import ibaSukkur5 from '../images/MouUniversities/IbaSukkurUni/ibasukkur5.jpg';
import ibaSukkur6 from '../images/MouUniversities/IbaSukkurUni/ibasukkur6.jpg';



const MoUSignedUni = () => {
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  const universities = [
    {
      id: 1,
      name: 'NED University of Engineering & Technology',
      logo: ned,
      description: 'This is a brief description about Karachi University.',
      images: [nedMoU1, nedMoU2, nedMoU3, nedMoU4],
    },
    {
      id: 2,
      name: 'Sindh Madressatul Islam University',
      logo: smiu,
      description: 'This is a brief description about University of Example 2.',
      images: [smiuMoU1, smiuMoU2],
    },
    {
      id: 3,
      name: 'Dawood University of Engineering and Technology',
      logo: dawood,
      description: 'This is a brief description about University of Example 2.',
      images: [dawoodMoU1, dawoodMoU2, dawoodMoU3, dawoodMoU4, dawoodMoU5, dawoodMoU6],
    },
    {
      id: 3,
      name: 'Ali Garh University',
      logo: aliGarh,
      description: 'This is a brief description about University of Example 2.',
      images: [dawoodMoU1, dawoodMoU2, dawoodMoU3, dawoodMoU4, dawoodMoU5, dawoodMoU6],
    },
    {
      id: 4,
      name: 'Beacon House College',
      logo: beacon,
      description: 'This is a brief description about University of Example 2.',
      images: [dawoodMoU1, dawoodMoU2, dawoodMoU3, dawoodMoU4, dawoodMoU5, dawoodMoU6],
    },
    {
      id: 5,
      name: 'DHA Suffa University',
      logo: suffa,
      description: 'This is a brief description about University of Example 2.',
      images: [dawoodMoU1, dawoodMoU2, dawoodMoU3, dawoodMoU4, dawoodMoU5, dawoodMoU6],
    },
    {
      id: 6,
      name: 'Greenwich University',
      logo: greenWich,
      description: 'This is a brief description about University of Example 2.',
      images: [dawoodMoU1, dawoodMoU2, dawoodMoU3, dawoodMoU4, dawoodMoU5, dawoodMoU6],
    },
    {
      id: 7,
      name: 'Highbrow University',
      logo: highbrow,
      description: 'This is a brief description about University of Example 2.',
      images: [highbrow1, highbrow2, highbrow3, highbrow4, highbrow5, highbrow6],
    },
    {
      id: 8,
      name: 'IBA University Sukkur',
      logo: ibaSukkur,
      description: 'This is a brief description about University of Example 2.',
      images: [ibaSukkur1, ibaSukkur2, ibaSukkur3, ibaSukkur4, ibaSukkur5, ibaSukkur6],
    },
    {
      id: 9,
      name: 'Karachi University',
      logo: ku,
      description: 'This is a brief description about University of Example 2.',
      images: [dawoodMoU1, dawoodMoU2, dawoodMoU3, dawoodMoU4, dawoodMoU5, dawoodMoU6],
    },
    {
      id: 10,
      name: 'Metropolitan University',
      logo: metropolitan,
      description: 'This is a brief description about University of Example 2.',
      images: [dawoodMoU1, dawoodMoU2, dawoodMoU3, dawoodMoU4, dawoodMoU5, dawoodMoU6],
    },
    {
      id: 11,
      name: 'Newports University',
      logo: newports,
      description: 'This is a brief description about University of Example 2.',
      images: [newports1, newports2, newports3, newports4, newports5, newports6],
    },
    {
      id: 12,
      name: 'Nixor College',
      logo: nixor,
      description: 'This is a brief description about University of Example 2.',
      images: [dawoodMoU1, dawoodMoU2, dawoodMoU3, dawoodMoU4, dawoodMoU5, dawoodMoU6],
    },
    {
      id: 13,
      name: 'Salim Habib University',
      logo: salimHabib,
      description: 'This is a brief description about University of Example 2.',
      images: [dawoodMoU1, dawoodMoU2, dawoodMoU3, dawoodMoU4, dawoodMoU5, dawoodMoU6],
    },
    {
      id: 14,
      name: 'Sir Syed Unversity',
      logo: sirSyed,
      description: 'This is a brief description about University of Example 2.',
      images: [dawoodMoU1, dawoodMoU2, dawoodMoU3, dawoodMoU4, dawoodMoU5, dawoodMoU6],
    },
    {
      id: 15,
      name: 'ZiaUddin University',
      logo: ziauddin,
      description: 'This is a brief description about University of Example 2.',
      images: [ziauddin1, ziauddin2, ziauddin3, ziauddin4, ziauddin5, ziauddin6],
    },
  ];

  const openModal = (university) => {
    setSelectedUniversity(university);
  };

  const closeModal = () => {
    setSelectedUniversity(null);
  };

  // Slider settings for universities
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
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
    <section className="mou-universities">
      <Slider {...sliderSettings} className="universities-slider">
        {universities.map((university) => (
          <div key={university.id} className="university-card">
            <div className="university-logo-container">
              <img
                src={university.logo}
                alt={`${university.name} Logo`}
                className="university-logo"
              />
            </div>
            <h3 className="university-name">{university.name}</h3>
            <p className="university-description">{university.description}</p>
            <button
              className="learn-more-btn fw-bold"
              onClick={() => openModal(university)}
            >
              See Glimpse
            </button>
          </div>
        ))}
      </Slider>

      {/* Modal for displaying images */}
      {selectedUniversity && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{selectedUniversity.name}</h3>
            <div className="images-container">
              {selectedUniversity.images.length > 0 ? (
                selectedUniversity.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`MoU ${selectedUniversity.name} ${index + 1}`}
                    className="mou-image"
                  />
                ))
              ) : (
                <p>No images available for this university.</p>
              )}
            </div>
            <button className="close-modal-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MoUSignedUni;
