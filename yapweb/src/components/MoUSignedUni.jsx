import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

// Beacon House School
import beaconSchool1 from '../images/MouUniversities/BeaconHouseSchool/beaconSchool1.jpg';
import beaconSchool2 from '../images/MouUniversities/BeaconHouseSchool/beaconSchool2.jpg';
import beaconSchool3 from '../images/MouUniversities/BeaconHouseSchool/beaconSchool3.jpg';
import beaconSchool4 from '../images/MouUniversities/BeaconHouseSchool/beaconSchool4.jpg';
import beaconSchool5 from '../images/MouUniversities/BeaconHouseSchool/beaconSchool5.jpg';
import beaconSchool6 from '../images/MouUniversities/BeaconHouseSchool/beaconSchool6.jpg';

const MoUSignedUni = () => {
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  const universities = [
    {
      id: 1,
      name: 'NED University of Engineering & Technology',
      logo: ned,
      description:
        'Memorandum of Understanding (MoU) Between Youth Ambassador Programme by Arts Council of Pakistan Karachi and NED University of Engineering & Technology',
      images: [nedMoU1, nedMoU2, nedMoU3, nedMoU4],
    },
    {
      id: 2,
      name: 'Sindh Madressatul Islam University',
      logo: smiu,
      description:
        'Memorandum of Understanding (MoU) Between Youth Ambassador Programme by Arts Council of Pakistan Karachi and Sindh Madressatul Islam University',
      images: [smiuMoU1, smiuMoU2],
    },
    {
      id: 3,
      name: 'Dawood University of Engineering and Technology',
      logo: dawood,
      description:
        'Memorandum of Understanding (MoU) Between Youth Ambassador Programme by Arts Council of Pakistan Karachi and Dawood University of Engineering and Technology',
      images: [dawoodMoU1, dawoodMoU2, dawoodMoU3, dawoodMoU4, dawoodMoU5, dawoodMoU6],
    },
    {
      id: 4,
      name: 'Ali Garh University',
      logo: aliGarh,
      description:
        'Memorandum of Understanding (MoU) Between Youth Ambassador Programme by Arts Council of Pakistan Karachi and Ali Garh University',
      images: [dawoodMoU1, dawoodMoU2, dawoodMoU3, dawoodMoU4, dawoodMoU5, dawoodMoU6],
    },
    {
      id: 5,
      name: 'Beacon House College',
      logo: beacon,
      description:
        'Memorandum of Understanding (MoU) Between Youth Ambassador Programme by Arts Council of Pakistan Karachi and Beacon House College',
      images: [beaconSchool1, beaconSchool2, beaconSchool3, beaconSchool4, beaconSchool5, beaconSchool6],
    },
    {
      id: 6,
      name: 'DHA Suffa University',
      logo: suffa,
      description:
        'Memorandum of Understanding (MoU) Between Youth Ambassador Programme by Arts Council of Pakistan Karachi and DHA Suffa University',
      images: [dawoodMoU1, dawoodMoU2, dawoodMoU3, dawoodMoU4, dawoodMoU5, dawoodMoU6],
    },
    {
      id: 7,
      name: 'Greenwich University',
      logo: greenWich,
      description:
        'Memorandum of Understanding (MoU) Between Youth Ambassador Programme by Arts Council of Pakistan Karachi and Greenwich University',
      images: [dawoodMoU1, dawoodMoU2, dawoodMoU3, dawoodMoU4, dawoodMoU5, dawoodMoU6],
    },
    {
      id: 8,
      name: 'Highbrow University',
      logo: highbrow,
      description:
        'Memorandum of Understanding (MoU) Between Youth Ambassador Programme by Arts Council of Pakistan Karachi and Highbrow University',
      images: [highbrow1, highbrow2, highbrow3, highbrow4, highbrow5, highbrow6],
    },
    {
      id: 9,
      name: 'IBA University Sukkur',
      logo: ibaSukkur,
      description:
        'Memorandum of Understanding (MoU) Between Youth Ambassador Programme by Arts Council of Pakistan Karachi and IBA University Sukkur',
      images: [ibaSukkur1, ibaSukkur2, ibaSukkur3, ibaSukkur4, ibaSukkur5, ibaSukkur6],
    },
    {
      id: 10,
      name: 'Karachi University',
      logo: ku,
      description:
        'Memorandum of Understanding (MoU) Between Youth Ambassador Programme by Arts Council of Pakistan Karachi and Karachi University',
      images: [dawoodMoU1, dawoodMoU2, dawoodMoU3, dawoodMoU4, dawoodMoU5, dawoodMoU6],
    },
    {
      id: 11,
      name: 'Metropolitan University',
      logo: metropolitan,
      description:
        'Memorandum of Understanding (MoU) Between Youth Ambassador Programme by Arts Council of Pakistan Karachi and Metropolitan University',
      images: [dawoodMoU1, dawoodMoU2, dawoodMoU3, dawoodMoU4, dawoodMoU5, dawoodMoU6],
    },
    {
      id: 12,
      name: 'Newports University',
      logo: newports,
      description:
        'Memorandum of Understanding (MoU) Between Youth Ambassador Programme by Arts Council of Pakistan Karachi and Newports University',
      images: [newports1, newports2, newports3, newports4, newports5, newports6],
    },
    {
      id: 13,
      name: 'Nixor College',
      logo: nixor,
      description:
        'Memorandum of Understanding (MoU) Between Youth Ambassador Programme by Arts Council of Pakistan Karachi and Nixor College',
      images: [dawoodMoU1, dawoodMoU2, dawoodMoU3, dawoodMoU4, dawoodMoU5, dawoodMoU6],
    },
    {
      id: 14,
      name: 'Salim Habib University',
      logo: salimHabib,
      description:
        'Memorandum of Understanding (MoU) Between Youth Ambassador Programme by Arts Council of Pakistan Karachi and Salim Habib University',
      images: [dawoodMoU1, dawoodMoU2, dawoodMoU3, dawoodMoU4, dawoodMoU5, dawoodMoU6],
    },
    {
      id: 15,
      name: 'Sir Syed University of Engineering and Technology',
      logo: sirSyed,
      description:
        'Memorandum of Understanding (MoU) Between Youth Ambassador Programme by Arts Council of Pakistan Karachi and Sir Syed University of Engineering and Technology',
      images: [dawoodMoU1, dawoodMoU2, dawoodMoU3, dawoodMoU4, dawoodMoU5, dawoodMoU6],
    },
    {
      id: 16,
      name: 'ZiaUddin University',
      logo: ziauddin,
      description:
        'Memorandum of Understanding (MoU) Between Youth Ambassador Programme by Arts Council of Pakistan Karachi and ZiaUddin University',
      images: [ziauddin1, ziauddin2, ziauddin3, ziauddin4, ziauddin5, ziauddin6],
    },
    {
      id: 17,
      name: 'Beacon House School',
      logo: beacon,
      description:
        'Memorandum of Understanding (MoU) Between Youth Ambassador Programme by Arts Council of Pakistan Karachi and Beacon House School',
      images: [beaconSchool1, beaconSchool2, beaconSchool3, beaconSchool4, beaconSchool5, beaconSchool6],
    },
  ];

  const openModal = (university) => {
    setSelectedUniversity(university);
  };

  const closeModal = () => {
    setSelectedUniversity(null);
  };

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

  const modalSliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <section className="py-12 px-6 sm:px-6 lg:px-8" id="mouSignedUni">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0D7292] to-[#0D7292] bg-clip-text text-transparent mb-8">
          MoU Signed Universities
        </h2>
        <Slider {...sliderSettings} className="universities-slider">
          {universities.map((university) => (
            <div key={university.id} className="">
              <div
                className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                role="button"
                tabIndex={0}
                onClick={() => openModal(university)}
                onKeyDown={(e) => e.key === 'Enter' && openModal(university)}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="h-32 flex items-center justify-center">
                    <img
                      src={university.logo}
                      alt={`${university.name} Logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-800 h-12 flex items-center justify-center">
                    {university.name}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-600 line-clamp-3">
                    {university.description}
                  </p>
                  <button
                    className="mt-5 bg-[#0D7292] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#0D7292]/90 hover:scale-105 active:scale-95 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(university);
                    }}
                  >
                    See Glimpse
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {selectedUniversity && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[1000]"
          onClick={closeModal}
          role="dialog"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white p-4 sm:p-6 rounded-xl max-w-[90vw] sm:max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              id="modal-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0D7292] to-[#0D7292] bg-clip-text text-transparent text-center mb-6"
            >
              {selectedUniversity.name}
            </h3>
            <Slider {...modalSliderSettings} className="w-full">
              {selectedUniversity.images.map((image, index) => (
                <div key={index} className="flex justify-center items-center">
                  <img
                    src={image}
                    alt={`MoU with ${selectedUniversity.name} - Image ${index + 1}`}
                    className="w-full max-h-[60vh] object-contain rounded-lg shadow-md"
                  />
                </div>
              ))}
            </Slider>
            <button
              className="mt-6 w-full sm:w-auto bg-[#0D7292] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#0D7292]/90 hover:scale-105 active:scale-95 transition-all"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MoUSignedUni;