import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SocietiesSlider.css';

import society1 from '../images/Societies/Society1.png';
import society2 from '../images/Societies/Society2.png';
import society3 from '../images/Societies/Society3.png';
import society4 from '../images/Societies/Society4.png';
import society5 from '../images/Societies/Society5.png';
import society6 from '../images/Societies/Society6.png';
import society7 from '../images/Societies/Society7.png';
import society8 from '../images/Societies/Society8.png';
import society9 from '../images/Societies/Society9.png';
import society10 from '../images/Societies/Society10.png';
import society11 from '../images/Societies/Society11.png';
import society12 from '../images/Societies/Society12.png';
import society13 from '../images/Societies/Society13.png';
import society14 from '../images/Societies/Society14.png';
import society15 from '../images/Societies/Society15.png';
import society16 from '../images/Societies/Society16.png';


// Beats And Buzz
import beatsEv1 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv1.jpg';
import beatsEv2 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv2.jpg';
import beatsEv3 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv3.jpg';
import beatsEv4 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv4.jpg';
import beatsEv5 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv5.jpg';
import beatsEv6 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv6.jpg';
import beatsEv7 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv7.jpg';
import beatsEv8 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv8.jpg';
import beatsEv9 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv9.jpg';
import beatsEv10 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv10.jpg';
import beatsEv11 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv11.jpg';
import beatsEv12 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv12.jpg';
import beatsEv13 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv13.jpg';
import beatsEv14 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv14.jpg';
import beatsEv15 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv15.jpg';
import beatsEv16 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv16.jpg';
import beatsEv17 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv17.jpg';
import beatsEv18 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv18.jpg';
import beatsEv19 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv19.jpg';
import beatsEv20 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv20.jpg';
import beatsEv21 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv21.jpg';
import beatsEv22 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv22.jpg';
import beatsEv23 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv23.jpg';
import beatsEv24 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv24.jpg';
import beatsEv25 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv25.jpg';
import beatsEv26 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv26.jpg';
import beatsEv27 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv27.jpg';
import beatsEv28 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv28.jpg';
import beatsEv29 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv29.jpg';
import beatsEv30 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv30.jpg';
import beatsEv31 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv31.jpg';
import beatsEv32 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv32.jpg';
import beatsEv33 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv33.jpg';
import beatsEv34 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv34.jpg';
import beatsEv35 from '../images/SocietyEvents/BeatsAndBuzz/beatsEv35.jpg';

// Tech Titans
import techEv1 from '../images/SocietyEvents/TechTitans/techEv1.jpg';
import techEv2 from '../images/SocietyEvents/TechTitans/techEv2.jpg';
import techEv3 from '../images/SocietyEvents/TechTitans/techEv3.jpg';
import techEv4 from '../images/SocietyEvents/TechTitans/techEv4.jpg';
import techEv5 from '../images/SocietyEvents/TechTitans/techEv5.jpg';
import techEv6 from '../images/SocietyEvents/TechTitans/techEv6.jpg';

// Sports Society
import sportsEv1 from '../images/SocietyEvents/SportsSociety/sportsEv1.jpg';
import sportsEv2 from '../images/SocietyEvents/SportsSociety/sportsEv2.jpg';
import sportsEv3 from '../images/SocietyEvents/SportsSociety/sportsEv3.jpg';
import sportsEv4 from '../images/SocietyEvents/SportsSociety/sportsEv4.jpg';

// Rhetoric Realm Society
import rhetoricEv1 from '../images/SocietyEvents/RhetoricRealm/rhetoricEv1.jpg';
import rhetoricEv2 from '../images/SocietyEvents/RhetoricRealm/rhetoricEv2.jpg';
import rhetoricEv3 from '../images/SocietyEvents/RhetoricRealm/rhetoricEv3.jpg';
import rhetoricEv4 from '../images/SocietyEvents/RhetoricRealm/rhetoricEv4.jpg';
import rhetoricEv5 from '../images/SocietyEvents/RhetoricRealm/rhetoricEv5.jpg';
import rhetoricEv6 from '../images/SocietyEvents/RhetoricRealm/rhetoricEv6.jpg';
import rhetoricEv7 from '../images/SocietyEvents/RhetoricRealm/rhetoricEv7.jpg';
import rhetoricEv8 from '../images/SocietyEvents/RhetoricRealm/rhetoricEv8.jpg';
import rhetoricEv9 from '../images/SocietyEvents/RhetoricRealm/rhetoricEv9.jpg';
import rhetoricEv10 from '../images/SocietyEvents/RhetoricRealm/rhetoricEv10.jpg';
import rhetoricEv11 from '../images/SocietyEvents/RhetoricRealm/rhetoricEv11.jpg';
import rhetoricEv12 from '../images/SocietyEvents/RhetoricRealm/rhetoricEv12.jpg';
import rhetoricEv13 from '../images/SocietyEvents/RhetoricRealm/rhetoricEv13.jpg';
import rhetoricEv14 from '../images/SocietyEvents/RhetoricRealm/rhetoricEv14.jpg';


const SocietiesSlider = () => {
  const navigate = useNavigate();
  const [selectedSociety, setSelectedSociety] = useState(null); // To track selected society
  const [showEvents, setShowEvents] = useState(false); // To toggle event visibility

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const societies = [
    { id: 1, name: 'Readers & Writers', image: society1, events: [] },
    { id: 2, name: 'Dramatic & Alliance', image: society2, events: [] },
    { id: 3, name: 'Beats & Buzz', image: society1, events: [beatsEv1, beatsEv2, beatsEv3, beatsEv4, beatsEv5, beatsEv6, beatsEv7, beatsEv8, beatsEv9, beatsEv10, beatsEv11, beatsEv12, beatsEv13, beatsEv14, beatsEv15, beatsEv16, beatsEv17, beatsEv18, beatsEv19, beatsEv20, beatsEv21, beatsEv22, beatsEv23, beatsEv24, beatsEv25, beatsEv26, beatsEv27, beatsEv28, beatsEv29, beatsEv30, beatsEv31, beatsEv32, beatsEv33, beatsEv34, beatsEv35] },
    { id: 4, name: 'Sports Society', image: society4, events: [sportsEv1, sportsEv2, sportsEv3, sportsEv4] },
    { id: 5, name: 'Beats Breaker', image: society5, events: [] },
    { id: 6, name: 'Quills and Scroll', image: society6, events: [] },
    { id: 7, name: 'Culinary Cooks', image: society7, events: [] },
    { id: 8, name: 'Tech Titans', image: society8, events: [techEv1, techEv2, techEv3, techEv4, techEv5, techEv6] },
    { id: 9, name: 'Rhetoric Realm', image: society9, events: [rhetoricEv1, rhetoricEv2, rhetoricEv3, rhetoricEv4, rhetoricEv5, rhetoricEv6, rhetoricEv7, rhetoricEv8, rhetoricEv9, rhetoricEv11, rhetoricEv12, rhetoricEv13, rhetoricEv14] },
    { id: 10, name: 'Logistics Edge', image: society10, events: [] },
    { id: 11, name: 'Cinemagic', image: society11, events: [] },
    { id: 12, name: 'Community Cares', image: society12, events: [] },
    { id: 13, name: 'Trads & Transitions', image: society13, events: [] },
    { id: 14, name: 'Stitch & Stroke Club', image: society14, events: [] },
    { id: 15, name: 'Entrepreneurship', image: society15, events: [] },
    { id: 16, name: 'Psych Squad', image: society16, events: [] },
  ];

  const handleSocietySelect = (societyId) => {
    const society = societies.find((s) => s.id === societyId);
    setSelectedSociety(society);
    setShowEvents(true); // Show events when a society is selected
  };

  const handleKnowMoreClick = (id) => {
    navigate(`/society/${id}`);
  };

  const handleHideEvents = () => {
    setShowEvents(false); // Hide events when the button is clicked
  };

  return (
    <div className="container" id="OurSociety">
      {/* Header Section */}
      <div className="curved-heading">Our Societies</div>

      {/* Dropdown for Selecting Society */}
      <DropdownButton
        id="society-dropdown"
        title={selectedSociety ? selectedSociety.name : 'Societies Event'}
        className="mb-4"
        onSelect={(eventKey) => handleSocietySelect(Number(eventKey))}
      >
        {societies.map((society) => (
          <Dropdown.Item key={society.id} eventKey={society.id}>
            {society.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>

      {/* Display Selected Society Events */}
      {selectedSociety && showEvents && selectedSociety.events.length > 0 ? (
        <div className="events-slider">
          <Button variant="danger" className="mb-3" onClick={handleHideEvents}>
            Hide Events
          </Button>
          <Slider {...settings}>
            {selectedSociety.events.map((eventImage, index) => (
              <div key={index} className="event-slide">
                <div className="image-wrapper">
                  <img src={eventImage} alt={`Event ${index + 1}`} className="img-fluid" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        selectedSociety && showEvents && <p>No events available for {selectedSociety.name}</p>
      )}

      {/* Society Slider */}
      <Slider {...settings} className="main-societies">
        {societies.map((society) => (
          <div key={society.id} className="society-slide">
            <div className="image-wrapper">
              <img src={society.image} alt={society.name} className="img-fluid" />
            </div>
            <h3>{society.name}</h3>
            <Button id="sent" onClick={() => handleKnowMoreClick(society.id)}>
              Know more
            </Button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SocietiesSlider;


